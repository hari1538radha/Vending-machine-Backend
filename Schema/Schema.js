import mongoose, { model } from "mongoose";
const AddProductSchema = new mongoose.Schema({
  SlotName: {
    type: String,
  },
  ProductName: {
    type: String,
  },
  Price: {
    type: String,
  },
  Catogory: {
    type: String,
  },
});

export const AddProductModel = new model ("addproduct" ,AddProductSchema );