import { User, Event } from "../model/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getEvents = async (req, res) => {
  const { page, limit } = req.query;

  const skip = (page - 1) * limit;

  const events = await Event.find({}, "-updatedAt -createdAt", {
    skip,
    limit,
  });

  res.status(200).json(events);
};

const addParticipants = async (req, res) => {};

export default {
  getEvents: ctrlWrapper(getEvents),
};
