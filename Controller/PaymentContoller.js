// import { AddProductModel } from "../Schema/ProductSchema";
import { Paymentmodel } from "../Schema/PaymentSchema.js";

export const Payment = async (req, res) => {
  const body = req.body;

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
        res.send({ status: 404, err });
      } else {
        res.send({ status: 200,message:"paymentstatus updated successfully" });
      }
    });
  }
};
