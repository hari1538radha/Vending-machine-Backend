import { AddProductModel } from "../Schema/ProductSchema.js";

export const CheckoutProductsInfo = async (req, res) => {
  const BalanceCart = [[],[]];
  var body = req.body.orders;
  console.log(req);
  const ObjLength = Object.keys(body).length;
  
  const OrderID = Object.keys(body);
  const OrderQunatity = Object.values(body);
console.log(req.body)
  for (var i = 0; i <= ObjLength - 1; i++) {
    const datas = body[i];

    const data = await AddProductModel.find({ _id: OrderID[i] }).then(
      (results) => {
        const {Price,ImageURL,ProductName} = results[0]
        console.log(Price)
        if (OrderQunatity[i] <= results[0].Quantity) {
          BalanceCart[0].push({
            status: 200,
            id: results[0]._id,
            Ordered:OrderQunatity[i],
            QuantityAvailable: results[0].Quantity,
            Price:Price,
            ImageURL:ImageURL,
            ProductName:ProductName

          });
          
        } else {
          BalanceCart[1].push({
            status: 411,
            id: results[0]._id,
            QuantityAvailable:
              OrderQunatity[i] - (OrderQunatity[i] - results[0].Quantity),
              id: results[0]._id,
              Ordered:OrderQunatity[i],
              Price:Price,
              ImageURL:ImageURL,
              ProductName:ProductName
          });
        }
      }
    );
  }
  res.send(BalanceCart);
  console.log(BalanceCart);
};
