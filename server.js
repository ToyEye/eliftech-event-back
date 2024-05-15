import mongoose from "mongoose";

import { app } from "./app.js";

const { MONGODB, PORT = 3000 } = process.env;

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
