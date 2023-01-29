import Express from "express";
// import { mongoUrl } from "./Config/config.js";
import mongoose from "mongoose";
import Routes from "./Routes/Routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();

const app = Express();

const PORT = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin:"http://localhost:3000"}));


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use("/api", Routes);
mongoose.set('strictQuery', false)
mongoose.connect(
    `mongodb+srv://HariR:${process.env.MONGO_PASS}@cluster0.fphdtyd.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  },
  (err) => {
    if (!err) {
      console.log("connected to db");
    } else {
      console.log("error", err);
    }
  }
);

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});