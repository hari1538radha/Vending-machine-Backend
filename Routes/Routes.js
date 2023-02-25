import pkg from "express";
import { AddProduct } from "../Controller/AddProducts.js";
import { productDetails } from "../Controller/GetProducts.js";
import { AdminLogin } from "../Controller/Login.js";
import { CheckoutProducts } from "../Controller/CheckoutProduct.js";
import { Payment } from "../Controller/PaymentContoller.js";

const Routes = pkg.Router();
const { express } = pkg;

Routes.post("/add", AddProduct);
Routes.get("/products",productDetails)
Routes.post("/login",AdminLogin)
Routes.get("/cart",CheckoutProducts)
Routes.post("/payment",Payment)

export default Routes;
