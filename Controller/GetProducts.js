import { AddProductModel } from "../Schema/Schema.js";

export const productDetails = (req, res) => {
  const MainData = [];
  const data = AddProductModel.find({ Row: 1 })
    .sort({ Col: 1 })
    .then((result) => {
      MainData.push(result);
      const Row2 = AddProductModel.find({ Row: 2 })
        .sort({ Col: 1 })
        .then((result) => {
          MainData.push(result);
          const Row3 = AddProductModel.find({ Row: 3 })
            .sort({ Col: 1 })
            .then((result) => {
              MainData.push(result);
              res.send(MainData);
            });
        });
    });

  MainData.pop();
};
