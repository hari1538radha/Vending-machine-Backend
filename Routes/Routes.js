import pkg from "express";
import { AddProduct } from "../Controller/AddProducts.js";
import { productDetails } from "../Controller/GetProducts.js";
import { AdminLogin } from "../Controller/Login.js";
import { CheckoutProductsInfo } from "../Controller/CheckOut.js";
import { Payment } from "../Controller/PaymentControllerr.js";

const Routes = pkg.Router();
const { express } = pkg;

Routes.post("/add", AddProduct);
Routes.get("/products",productDetails)
Routes.post("/login",AdminLogin)
Routes.post("/cart",CheckoutProductsInfo)
Routes.post("/payment",Payment)

export default Routes;
