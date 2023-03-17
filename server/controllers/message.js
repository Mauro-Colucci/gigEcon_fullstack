import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";

export const createMessage = async (req, res, next) => {
  try {
    const message = await Message.create({
      ...req.body,
      userId: req.userId,
    });
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
        lastMessage: req.body.desc,
      },
      { new: true }
    );

    res.status(201).send(message);
  } catch (err) {
    next(err);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).send(messages);
  } catch (err) {
    next(err);
  }
};
