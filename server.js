import mongoose from "mongoose";

import app from "./app.js";

const MONGO_DB = process.env.MONGO_DB;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("Mongo on");
    app.listen(PORT, () => {
      console.log("server on");
    });
  })
  .catch(() => {
    process.exit(1);
  });
