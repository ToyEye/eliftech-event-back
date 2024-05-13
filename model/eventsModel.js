import { Schema, model } from "mongoose";

import Joi from "joi";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    event_date: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    participants: {
      type: [
        {
          fullName: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          dateOfEvent: {
            type: Date,
            required: true,
          },
          source: {
            type: String,
            enum: ["Social media", "Friends", "Found myself"],
            required: true,
          },
        },
      ],
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

export const userRegister = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  dateOfEvent: Joi.date().iso().required(),
  source: Joi.string()
    .valid("Social media", "Friends", "Found myself")
    .required(),
});

export const Event = model("event", eventSchema);
