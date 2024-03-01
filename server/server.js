import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import logger from "./libraries/logger-lib/logger.js";
import { app } from "./app.js";
import { ERROR_LEVEL } from "./libraries/logger-lib/errorLevels.js";
// app.use(logger);

const PORT = process.env.PORT || 3000;

// Connect to Data Base
const DB = process.env.DB_URI;

mongoose
  .connect(DB)
  .then(() => {
    logger.info("DB connection is successful");
    app.listen(PORT, () => {
      console.log(`Server runs on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error(`Failed to connect to mongo ${error} ${ERROR_LEVEL.FATAL}`);
  });
