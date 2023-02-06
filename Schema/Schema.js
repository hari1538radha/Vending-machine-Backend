import mongoose, { model } from "mongoose";

const AddProductSchema = new mongoose.Schema(
  {
    SlotName: {
      type: String,
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

const Login = new mongoose.Schema({
  AdminName: {
    type: String,
  },
  Password: {
    type: String,
  },
});
export const LoginData = new model("Admin", Login);

export const AddProductModel = new model("addproduct", AddProductSchema);
