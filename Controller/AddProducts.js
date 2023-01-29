import { AddProductModel } from "../Schema/Schema.js";
export const AddProduct = (req, res) => {
  const body = req.body;
  if (
    !(
      body.SlotName &&
      body.ProductName &&
      body.Price &&
      body.Catogory &&
      body.Quantity &&
      body.ImageURL
    )
  ) {
    res.send({
      status: 204,
      message: "please enter the product details completely",
    });
  } else {
    const AddProductdata = new AddProductModel({
      SlotName: body.SlotName,
      ProductName: body.ProductName,
      Price: body.Price,
      Catogory: body.Catogory,
      Quantity: body.Quantity,
      ImageURL: body.ImageURL,
    });

    AddProductdata.save((err, data) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send({
          message: "Product added successfully!!",
          status: 200,
          AddProductdata,
        });
      }
    });
  }
};
