import { Schema, model } from "mongoose";

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
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { versionKey: false, timestamps: true }
);

export const Event = model("event", eventSchema);
