import { LoginData } from "../Schema/LoginSchema.js";

export const AdminLogin = async (req, res) => {
  const body = req.body;
  if (!body.AdminName) {
    res.send({
      status: 204,
      message: "please enter the Login data completely",
    });
  } else {
    const data = await LoginData.findOne({ AdminName: body.AdminName });
    if (data) {
      if (body.Password == data.Password) {
        res.status(200).send({ message: "Login success" });
      } else {
        res.status(200).send({ message: "Invalid Credentials" });
      }
    } else {
      res.status(401).send({ message: "User does not exist" });
    }
  }
};
