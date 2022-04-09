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
    VerboseLogger.logSelector(timeout, "be displayed");
    return await browser
      .waitUntil(targetElement.isDisplayed(), { timeout, message })
      .then(
        () => true,
        (error) => this.assertionHandler(error)
      );
  }

  static async waitForElementToBeClickable(
    targetElement,
    timeout = DEFAULT_TIMEOUT,
    message = "Element not clickable"
  ) {
    VerboseLogger.logSelector(timeout, "be clickable");
    await browser
      .waitUntil(targetElement.isClickable(), { timeout, message })
      .then(
        () => true,
        (error) => this.assertionHandler(error)
      );
  }

  static async waitForElementOptionallyPresent(
    targetElement,
    timeout = DEFAULT_TIMEOUT
  ) {
    return browser.waitUntil(targetElement.isDisplayed(), timeout).then(
      function () {
        return true;
      },
      function () {
        return false;
      }
    );
  }

  static assertionHandler(error) {
    if (process.env.softAssertions) {
      return false;
    } else {
      throw error;
    }
  }
}
