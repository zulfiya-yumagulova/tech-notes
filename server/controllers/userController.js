import { User } from "../models/userModel.js";

// Create a gift
export const createUser = async (req, res) => {
  try {
    if (!req.body.title || !req.body.description || !req.body.price) {
      return res.status(400).json({
        message: "Send all required fields: title, description, price",
      });
    }
    const newGift = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newGift,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
