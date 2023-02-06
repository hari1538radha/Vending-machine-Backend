import mongoose, { model } from "mongoose";

const Logindata = new mongoose.Schema({
  AdminName: {
    type: String,
  },
  Password: {
    type: String,
  },
});

export const LoginData = new model("Admin", Logindata);
