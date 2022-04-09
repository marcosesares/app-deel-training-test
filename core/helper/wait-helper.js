import { VerboseLogger } from "../config/logger/verbose-logger";
import { CoreConstants } from "./../core-constants";

const { DEFAULT_TIMEOUT, TIMEOUTS } = CoreConstants;

export class WaitHelper {
  static async pause(sleepTime = TIMEOUTS.s) {
    await browser.pause(sleepTime);
  }

  static async pauseForTenMinutes() {
    await browser.pause(TIMEOUTS.tenMinutes);
  }

  static async waitForElementToBeDisplayed(
    targetElement,
    timeout = DEFAULT_TIMEOUT,
    message = "Element should be displayed"
  ) {
    try {
      await targetElement.waitForDisplayed({ timeout, message });
    } catch (error) {
      VerboseLogger.logSelector(timeout, message);
      throw error;
    }
  }

  static async waitForElementToBeClickable(
    targetElement,
    timeout = DEFAULT_TIMEOUT,
    message = "Element not clickable"
  ) {
    try {
      await targetElement.waitForClickable({ timeout, message });
    } catch (error) {
      VerboseLogger.logSelector(timeout, message);
      throw error;
    }
  }

  static async waitForElementOptionallyPresent(
    targetElement,
    timeout = DEFAULT_TIMEOUT,
    message = "Element should be displayed"
  ) {
    try {
      await targetElement.waitForDisplayed({ timeout, message });
    } catch (error) {
      VerboseLogger.logSelector(timeout, message);
      return false;
    }
    return true;
  }

  static assertionHandler(error) {
    if (process.env.softAssertions) {
      return false;
    } else {
      throw error;
    }
  }
}
