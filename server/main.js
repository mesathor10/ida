import express from "express";
// import authRouter from "./routes/authRouter.js";
import subRouter from "./routes/subRouter.js";
import cors from "cors";
import dbConnection from "./config/db.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use("/sub", subRouter);
// server.use("/auth", authRouter);

dbConnection();

server.listen(8000, () => {
  console.log("server listening");
});
