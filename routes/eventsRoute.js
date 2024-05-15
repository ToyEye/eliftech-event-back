import express from "express";

import ctrs from "../controllers/events.js";
import { isValidId, validateBody, isEmptyBody } from "../middlewares/index.js";
import { userRegister } from "../model/index.js";

export const eventRoute = express.Router();

eventRoute.get("/", ctrs.getEvents);

eventRoute.post(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(userRegister),
  ctrs.addParticipants
);

eventRoute.get("/:id", isValidId, ctrs.getEventParticipants);
