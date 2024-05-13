import express from "express";
import ctrs from "../controllers/events.js";

export const eventRoute = express.Router();

eventRoute.get("/", ctrs.getEvents);
