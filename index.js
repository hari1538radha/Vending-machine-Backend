import pkg from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import Routes from "./Routes/Routes.js";

dotenv.config();

const app = pkg();
const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

const PORT = process.env.PORT || 8002;

app.use(cors({ credentials: true }));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", Routes);
mongoose.set("strictQuery", false);

mongoose.connect(
  `mongodb+srv://HariR:${process.env.MONGO_PASS}@cluster0.fphdtyd.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  },
  (err) => {
    if (!err) {
      console.log("connected to db");
      app.listen(PORT, () => {
        console.log(`server listening at http://localhost:${PORT}`);
      });
    } else {
      console.log("error", err);
    }git
  }
);
let buttonState = false;

io.on("connection", (socket) => {
  console.log("New Connection");

  io.to(socket.id).emit("buttonState", buttonState);

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });

  socket.on("buttonState", (value) => {
    console.log("buttonState:", value);
    buttonState = value;
    socket.broadcast.emit("buttonState", value);
  });
});

httpServer.listen(5300, () => {
  console.log("Running on : ", httpServer.address());
});
