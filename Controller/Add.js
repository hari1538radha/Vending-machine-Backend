import { AddProductModel } from "../Schema/Schema.js";
export const AddProduct = (req, res) => {
  const body = req.body;
  if (!(body.SlotName && body.ProductName && body.Price && body.Catogory)) {
    res.status(200).send({
      message: "please enter the product details fully",
    });
  } else {
    const AddProductdata = new AddProductModel({
        SlotName:body.SlotName,
        ProductName: body.ProductName,
        Price: body.Price,
        Catogory: body.Catogory,
     
    });

    console.log(AddProductdata);

    AddProductdata.save((err, data) => {
      console.log(data);
      if (err) {
        return res.send(err);
      } else {
        return res.status(200).send({
          message: "Product added successfully!!",
        });
      }
    });
  }
};