import { Express } from "express";
import { AddProduct } from "../Controller/Add.js";
const Routes = Express.Router();
Routes.post("/add", AddProduct);
export default Routes