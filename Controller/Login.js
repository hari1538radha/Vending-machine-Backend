import { LoginData } from "../Schema/LoginSchema.js";

export const AdminLogin = async (req, res) => {
  const body = req.body;
  console.log(body.AdminName)
  if (!body.AdminName) {
    res.send({
      status: 204,
      message: "please enter the Login data completely",
    });
  } else {
    const data = await LoginData.findOne({ AdminName: body.AdminName });
       
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
