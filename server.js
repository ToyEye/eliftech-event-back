import mongoose from "mongoose";

import app from "./app.js";

const { MONGO_DB } = process.env;

mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("Mongo on");
    app.listen(3001, () => {
      console.log("server on");
    });
  })
  .catch(() => {
    process.exit(1);
  });
