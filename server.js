import app from "./app.js";
import mongoose from "mongoose";

const { MONGO_DB } = process.env;

mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("Mongo on");
    app.listen(3005, () => {
      console.log("server on");
    });
  })
  .catch(() => {
    process.exit(1);
  });
