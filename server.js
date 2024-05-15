import mongoose from "mongoose";

import app from "./app.js";

const MONGODB = process.env.MONGODB;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("Mongo on");
    app.listen(PORT, () => {
      console.log("server on");
    });
  })
  .catch(() => {
    process.exit(1);
  });
console.log("MY PORT", PORT);
