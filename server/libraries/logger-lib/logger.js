import winston, { format } from "winston";
// import dotenvFlow from "dotenv-flow";
// dotenvFlow.config();
export const logger = winston.createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp({
      format: "MM-DD-YYYY HH:mm:ss",
    }),
    format.json()
  ),
  transports: [new winston.transports.Console()],
});

logger.info("an info log");
export default logger;
