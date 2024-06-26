import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

import { eventRoute } from "./routes/eventsRoute.js";

export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoute);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});
