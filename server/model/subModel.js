import mongoose from "mongoose";

const subSchema = mongoose.Schema({
  Name: String,
  Phone: Number,
  Email: String,
  Date: Date,
});
const subModel = mongoose.model("subscribe", subSchema);

export default subModel;
