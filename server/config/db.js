import mongoose from "mongoose";

function dbConnection() {
  mongoose
    .connect("mongodb://localhost:27017/ida")
    .then((res) => console.log("Database Connected"))
    .catch((err) => console.log("Database doesn't connected", err));
}

export default dbConnection;
