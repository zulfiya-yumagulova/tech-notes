import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { logger } from "./middleware/logger.js";

const app = express();
app.use(logger);
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/", (req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});
