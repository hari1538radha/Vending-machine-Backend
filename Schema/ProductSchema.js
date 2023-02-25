import mongoose, { model } from "mongoose";

const AddProductSchema = new mongoose.Schema(
  {
    SlotName: {
      type: String,
      require: true,
    },
    Row: {
      type: Number,
      require: true,
    },
    Col: {
      type: Number,
    },
    Order: {
      type: Number,
    },
    ProductName: {
      type: String,
    },
    Price: {
      type: Number,
    },
    Catogory: {
      type: String,
    },
    Quantity: {
      type: Number,
    },
    ProductManufactureDate: {
      type: String,
    },
    ProductExpiryDate: {
      type: String,
    },
    ImageURL: {
      type: String,
    },
  },
  { timestamps: true }
);

export const AddProductModel = new model("addproduct", AddProductSchema);
