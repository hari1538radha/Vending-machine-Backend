import { AddProductModel } from "../Schema/ProductSchema.js";

export const CheckoutProducts = async (req, res) => {
  const BalanceCart = [];
  const body = req.body;

  for (var i = 0; i <= body.length - 1; i++) {
    const datas = body[i];

    const data = await AddProductModel.find({ _id: datas.id }).then(
      (results) => {
        if (datas.Quantity <= results[0].Quantity) {
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
              datas.Quantity - (datas.Quantity - results[0].Quantity),
          });
        }
      }
    );
  }
  res.send(BalanceCart);
  console.log(BalanceCart);
};

