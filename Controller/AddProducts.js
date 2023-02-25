import { AddProductModel } from "../Schema/ProductSchema.js";
export const AddProduct = (req, res) => {
  const body = req.body;
  if (
    !(
      (body.SlotName && body.ProductName)
      // body.Price &&
      // body.Row &&
      // body.Col &&
      // body.Order &&
      // body.Catogory &&
      // body.Quantity &&
      // body.ImageURL &&
      // body.ProductManufactureDate &&
      // body.ProductExpiryDate
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
      Row: body.Row,
      Col: body.Col,
      Order: body.Order,
      Catogory: body.Catogory,
      Quantity: body.Quantity,
      ImageURL: body.ImageURL,
      ProductManufactureDate: body.ProductManufactureDate,
      ProductExpiryDate: body.ProductExpiryDate,
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
