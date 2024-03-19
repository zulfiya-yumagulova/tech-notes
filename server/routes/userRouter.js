import express from "express";
import {
  getAllUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

// Create Users Router
export const userRouter = express.Router();
const app = express();
app.use("/users", userRouter);

// GET
userRouter.get("/", getAllUsers);

// GET by id
userRouter.get("/:id", getUser);

// POST
userRouter.post("/", createNewUser);

// PATCH
userRouter.patch("/", updateUser);

// Delete
userRouter.delete("/", deleteUser);
