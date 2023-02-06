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
    console.log(data)
    if (data) {
      if (body.Password == data.Password) {
        res.send({
          status: 200,
          message: "Login success",
        });
      } else {
        res.send({
          status: 204,
          message: "Invalid Credentials",
        });
      }
    } else {
      res.send({
        status: 401,
        message: "User does not exist",
      });
    }
  }
};
