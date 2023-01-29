const express = require('express')
import { AddProduct } from "../Controller/Add.js";
const Routes = express.Router();
Routes.post("/add", AddProduct);
export default Routes