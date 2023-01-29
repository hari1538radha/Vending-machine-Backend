import pkg from 'express';
const { express } = pkg;
import { AddProduct } from "../Controller/Add.js";
const Routes = express.Router();
Routes.post("/add", AddProduct);
export default Routes