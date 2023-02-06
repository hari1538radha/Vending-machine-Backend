import { LoginData } from "../Schema/Schema.js";

export const LoginData = (req, res) => {
  const body = req.body;
  if (!body.AdminName) {
    res.send({
      status: 204,
      message: "please enter the Login data completely",
    });
  } else {
    const LoginData = new LoginData({
      AdminName: body.AdminName,
      Password: body.Password,
    });
    const data =  AdminLogin.findOne({ AdminName: body.AdminName });

    if (data) {
      const validPassword = compare(
        body.Password,
        data.Password
      );
      if (validPassword) {
        res.status(200).send({ message: "Login success", data });
      } else {
        res.status(200).send({ error: "Invalid Credentials" });
      }
    } else {
      res.status(401).send({ error: "User does not exist" });
    }
  };
  }

