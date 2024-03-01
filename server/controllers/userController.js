import { User } from "../models/userModel.js";
import { Note } from "../models/noteModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

// Get All Users
// GET
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (!users) {
    return res.status(400).json({
      message: "No users found ",
    });
  }
  res.status(200).json({
    message: "success",
    data: users,
  });
});

// Get a single user
// GET
export const getUser = asyncHandler(async (req, res) => {});

// Create new  user
// POST
export const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;

  // Confirm data
  if (!username || !password || !roles || !roles.length) {
    return res.status(400).json({
      message: `All fields are required username, password, roles `,
    });
  }

  // Check for duplicates
  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({
      message: "User name exists",
    });
  }
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const userObject = { username, password: hashedPassword, roles };

  // Create and store a new user
  const user = await User.create(userObject);
  if (user) {
    res.status(201).json({
      message: "success",
      data: {
        user,
      },
    });
  } else {
    res.status(400).json({
      message: "Invalid user data received",
    });
  }
});

// Update a user
// PATCH
export const updateUser = asyncHandler(async (req, res) => {
  const { id, username, roles, active, password } = req.body;

  // Confirm data
  if (
    !id ||
    !username ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== "boolean"
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const user = awaitUser.findById(id).exec();
  if (!user) {
    return res.status(400).json({
      message: "No user found",
    });
  }

  // Check for duplicate
  const duplicate = await User.findOne({ username }).lean().exec();
  // Allow updates to the original
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(404).json({
      message: "Duplicate username",
    });
  }

  // Update user
  user.username = username;
  user.role = roles;
  user.active = active;

  // update password
  if (password) {
    // hash password
    user.password = await bcrypt.hash(password, 10);
  }

  const updatedUser = await user.save();

  res.json({
    message: "success",
    data: updatedUser,
  });
});
// Delete a user
// DELETE
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({
      message: "User ID Required",
    });
  }

  const notes = awaitNote.findOne({ user: id }).lean().exec();
  // Avoid deleting user if notes were assigned
  if (notes?.length) {
    return res.status(400).json({
      message: "User has assigned notes",
    });
  }

  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  const result = await user.deleteOne();
  res.status(204).json({
    message: `User ${result.username} with ID ${result.id} deleted`,
  });
});
