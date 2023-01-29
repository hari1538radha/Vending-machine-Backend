import pkg from "express";
import { AddProduct } from "../Controller/AddProducts.js";
import { productDetails } from "../Controller/GetProducts.js";

const Routes = pkg.Router();
const { express } = pkg;

Routes.post("/add", AddProduct);
Routes.get("/products",productDetails)

export default Routes;
