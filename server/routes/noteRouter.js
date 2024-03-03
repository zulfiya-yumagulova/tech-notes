import express from "express";
import { getAllNotes } from "../controllers/noteController.js";

const app = express();
export const noteRouter = express.Router();

noteRouter.get("/", getAllNotes);
