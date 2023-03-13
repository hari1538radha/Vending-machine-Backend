import { AddProductModel } from "../Schema/ProductSchema.js";

export const CheckoutProductsInfo = async (req, res) => {
  const BalanceCart = [];
  var body = req.body.orders;
  console.log();
  const ObjLength = Object.keys(body).length;
  // console.log(Object.keys(body));
  const OrderID = Object.keys(body);
  const OrderQunatity = Object.values(body);

  for (var i = 0; i <= ObjLength - 1; i++) {
    const datas = body[i];

    const data = await AddProductModel.find({ _id: OrderID[i] }).then(
      (results) => {
        if (OrderQunatity[i] <= results[0].Quantity) {
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
              OrderQunatity[i] - (OrderQunatity[i] - results[0].Quantity),
          });
        }
      }
    );
  }
  res.send(BalanceCart);
  console.log(BalanceCart);
};
