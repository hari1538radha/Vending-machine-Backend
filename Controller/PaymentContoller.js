import { AddProductModel } from "../Schema/ProductSchema.js";
import { Paymentmodel } from "../Schema/PaymentSchema.js";

export const Payment = async (req, res) => {
  const body = req.body;
  const Response = [[], []];
  if (!body.PaymentID) {
    res.send({ message: "payment Id unavailbale", status: 303 });
  } else {
    const Paymentdata = new Paymentmodel({
      PaymentID: body.PaymentID,
      PaymentRecevied: body.PaymentRecevied,
      ProductDetials: body.ProductDetials,
    });
    Paymentdata.save((err, data) => {
      if (err) {
        Response[0].push({ status: 404, err });
        
      } else {
        Response[0].push({
          status: 200,
          message: "paymentstatus updated successfully",
        });
    
      }
    });

    for (var i = 0; i <= body.ProductDetials.length - 1; i++) {
      const datas = body.ProductDetials[i];

      const findData = await AddProductModel.findOne({ _id: datas.id }).then(
        (results) => {
          console.log(results.Quantity);
          if(results.Quantity >= datas.Quantity)
          {
            AddProductModel.updateOne(
                { _id: datas.id },
                { $set: { Quantity: results.Quantity - datas.Quantity } },
                (err, data) => {
                  if (err) {
                    Response[1].push(err);
                    console.log(err);
                  } else {
                    Response[1].push({
                      UpdatedStatus: data.acknowledged,
                      ModifiedCount: data.modifiedCount,
                    });
                    console.log(data);
                  }
                }
              );
          }
          else{
            Response[1].push("Quantity not available")
          }
          
        }
      );
    }
    res.send(Response);
  }
 
};
