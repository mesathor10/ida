import express from "express";
import SubData from "../controller/subscribeController.js";

const subRouter = express.Router();

subRouter.route("/subscribe").post(SubData);

export default subRouter;
