const winston = require("winston");
const { createLogger, format, transports } = require("winston");
const { splat, combine, timestamp, label, printf, simple } = format;

const logger = winston.createLogger({
  level: "info",
  format: combine(simple()),
  transports: [new transports.Console()],
});

export default logger;
