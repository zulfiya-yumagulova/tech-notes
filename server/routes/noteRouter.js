import express from "express";
import {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

const app = express();
export const noteRouter = express.Router();

// noteRouter.get("/", getAllNotes);
// noteRouter.post("/", createNewNote);
// noteRouter.patch("/", updateNote);
// noteRouter.delete("/", deleteNote);
noteRouter
  .route("/")
  .get(getAllNotes)
  .post(createNewNote)
  .patch(updateNote)
  .delete(deleteNote);
