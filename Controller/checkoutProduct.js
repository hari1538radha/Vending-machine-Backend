import { AddProductModel } from "../Schema/Schema.js";

export const CheckoutProducts = (req, res) => {
  const BalanceCart = [];
  const body = req.body;
  console.log(body);

  const data = AddProductModel.find({ _id: body.id }).then((results) => {
    console.log(results[0].Quantity);

    if (body.Quantity <= results[0].Quantity) {
      BalanceCart.push({
        status: 200,
        id: results[0]._id,
        QuantityAvailable: results[0].Quantity,
      });
    } else {
      BalanceCart.push({
        status: 411,
        id: results[0]._id,
        QuantityAvailable:
          body.Quantity - (body.Quantity - results[0].Quantity),
      });
    }
    console.log(BalanceCart);
    res.send(BalanceCart);
  });
};
