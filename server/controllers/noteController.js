import { Note } from "../models/noteModel.js";
import { User } from "../models/userModel.js";
import asyncHandler from "express-async-handler";
// Get All notes
// GET
export const getAllNotes = asyncHandler(async (req, res) => {
  // Get all notes from MongoDB
  const notes = await Note.find().lean();

  //   Check if no notes
  if (!notes?.length) {
    return res.status(400).json({
      message: "No notes found.",
    });
  }

  //   Add a username to each note before sending the response
  const notesWithUser = await Promise.all(
    notes.map(async (note) => {
      const user = await User.findById(note.user);
      return { ...note, username: user.username };
    })
  );
  res.status(200).json({
    message: "success",
    data: notesWithUser,
  });
});

// Get a single note
// GET
export const getNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id);

  if (!note) {
    return res.status(400).json({
      message: "No note found",
    });
  }

  res.status(200).json({
    message: "success",
    data: note,
  });
});

// Create Note
// POST
export const createNote = asyncHandler(async (req, res) => {
  const { user, title, text } = req.body;

  if (!user || !title || !text) {
    return res.status(400).json({
      message: "All fieled are requered",
    });
  }

  // Check if duplicate title
  const duplicate = await Note.findOne({ title }).lean().exec();
  if (duplicate) {
    return res.status(409).json({
      message: "Duplicate note title",
    });
  }

  // Create and store the new note
  const note = await Note.create({ user, title, text });

  if (note) {
    return res.status(201).json({
      message: "success",
    });
  } else {
    res.status(400).json({
      message: "Invalid data recived",
    });
  }
});

// Udate note
// PATCH
export const updateNote = asyncHandler(async (req, res) => {
  const { id, user, title, text, completed } = req.params;

  // Confirm data
  if (!id || !user || !title || !text || typeof completed !== "boolean") {
    return res.status(400).json({ message: "All fields are required" });
  }

  const note = await Note.findByIdAndUpdate(id).exec();

  if (!note) {
    return res.status(400).json({
      message: "Note not found",
    });
  }

  //   Check for duplicate title
  const duplicate = await Note.findOne({ title }).lean().exec();

  // Allow remaining of the original note
  if (duplicate && duplicate._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate note title" });
  }

  note.user = user;
  note.title = title;
  note.text = text;
  note.completed = completed;

  const updatedNote = await note.save();

  res.status(201).json({
    message: "success",
    data: updatedNote,
  });
});

// Delete note
// DELETE
export const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      message: "Note ID required",
    });
  }

  // Confirm note exists to delete
  const note = await Note.findById(id).exec();
  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  const result = await Note.deleteOne();
  res.status(201).json({
    message: "Note has been deleted",
    data: null,
  });
});
