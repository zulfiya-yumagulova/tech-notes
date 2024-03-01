import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRouter.js";

export const app = express();

// Middleware for parsing request body
app.use(express.json());
// Middleware for handling CORS Policy
app.use(cors());
// Cookie parser middleware
app.use(cookieParser());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/users", userRouter);
