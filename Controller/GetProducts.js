import { AddProductModel } from "../Schema/ProductSchema.js";

export const productDetails = (req, res) => {
  const MainData = [];
  const Row1 = AddProductModel.find({ Row: 1 })
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
          // const Row4 = AddProductModel.find({ Row: 4 })
          //   .sort({ Col: 1 })
          //   .then((result) => {
          //     MainData.push(result);
          //   });
          // const Row5 = AddProductModel.find({ Row: 5 })
          //   .sort({ Col: 1 })
          //   .then((result) => {
          //     MainData.push(result);
          //     res.send(MainData);
          //   });
        });
    });

  MainData.pop();
};
