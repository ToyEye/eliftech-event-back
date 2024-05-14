import { Event } from "../model/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getEvents = async (req, res) => {
  const { page, limit } = req.query;

  const skip = (page - 1) * limit;

  const events = await Event.find({}, "-updatedAt -createdAt -participants", {
    skip,
    limit,
  });

  res.status(200).json(events);
};

const addParticipants = async (req, res) => {
  const { id } = req.params;

  const newUser = await Event.findByIdAndUpdate(
    id,
    {
      $push: { participants: req.body },
    },
    { new: true }
  );
  res.status(201).json(newUser);
};

const getEventParticipants = async (req, res) => {
  const { id } = req.params;

  const participants = await Event.findById(id, "title participants");

  res.status(200).json(participants);
};

export default {
  getEvents: ctrlWrapper(getEvents),
  addParticipants: ctrlWrapper(addParticipants),
  getEventParticipants: ctrlWrapper(getEventParticipants),
};
