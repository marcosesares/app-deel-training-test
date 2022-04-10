const isVerboseLoggingEnabled = !process.env.SOFT_ASSERTIONS;

export class VerboseLogger {
  static log(message) {
    if (isVerboseLoggingEnabled) {
      const timestamp = new Date().toISOString().split("T")[1];
      console.debug(`[${timestamp} - verbose]: ${message}.`);
    }
  }

  static logSelector(timeout, awaitedState) {
    VerboseLogger.log(`Waiting ${timeout}ms for element to ${awaitedState}.`);
  }
}
