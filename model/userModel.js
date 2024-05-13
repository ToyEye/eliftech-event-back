import { Schema, model } from "mongoose";

import Joi from "joi";

const userSchema = new Schema(
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
    dateOfBirth: {
      type: Date,
      required: true,
    },
    source: {
      type: String,
      enum: ["Social media", "Friends", "Found myself"],
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const userRegister = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().iso().required(),
  source: Joi.string()
    .valid("Social media", "Friends", "Found myself")
    .required(),
});

export const User = model("user", userSchema);
