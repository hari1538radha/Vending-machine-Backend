import { AddProductModel } from "../Schema/Schema.js";
export const productDetails = (req, res) => {
  AddProductModel.find((err, data) => {
    if (err) {
      return res.send({
        status: 404,
        message: "error",
        err,
      });
    } else if (data.length < 1) {
      res.send({
        message: "No product found",
        status: 204,
      });
    } else {
      res.send({
        status: 200,
        message: "products listed",
        data,
      });
    }
  });
};
