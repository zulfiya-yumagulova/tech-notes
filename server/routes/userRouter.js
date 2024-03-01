import express from "express";
import { createUser } from "../controllers/userController.js";

export const userRouter = express.Router();

// POST
userRouter.post("/", createUser);
