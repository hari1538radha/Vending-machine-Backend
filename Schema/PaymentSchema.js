import mongoose, { model } from "mongoose";

const Payment = new mongoose.Schema(
  {
    PaymentID: {
      type: String,
    },
    PaymentRecevied: {
      type: Number,
    },
    ProductDetials: {
      type: Array,
    },
  },
  { timestamps: true }
);

export const Paymentmodel = new model("payment", Payment);
