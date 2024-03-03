import express from "express";
import {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

const app = express();
export const noteRouter = express.Router();

noteRouter.get("/", getAllNotes);
noteRouter.get("/:id", getNote);
noteRouter.post("/", createNote);
noteRouter.patch("/", updateNote);
noteRouter.delete("/", deleteNote);
