import { CoreConstants } from "../core-constants";
import { ExpectationHelper } from "./expectation-helper";
import { WaitHelper } from "./wait-helper";

const { DEFAULT_TIMEOUT, TIMEOUTS } = CoreConstants;

export class ElementHelper {
  static async verifyElementTextEqualTo(
    targetElement,
    elementName,
    expectedValue
  ) {
    await ExpectationHelper.verifyElementTextEqualTo(
      targetElement,
      elementName,
      expectedValue
    );
  }

  static async actionClickUntilDisplayed(targetElement, timeout = TIMEOUTS.s) {
    await WaitHelper.waitForElementOptionallyPresent(targetElement, timeout);
    while (targetElement.isDisplayed()) {
      await targetElement.click();
      await WaitHelper.waitForElementOptionallyPresent(targetElement, timeout);
    }
  }

  static async actionClickIfDisplayed(targetElement, timeout = TIMEOUTS.s) {
    await WaitHelper.waitForElementOptionallyPresent(targetElement, timeout);
    if (targetElement.isDisplayed()) {
      await targetElement.click();
    }
  }

  static async actionClick(
    targetElement,
    timeout = DEFAULT_TIMEOUT,
    message = "Element not clickable"
  ) {
    await WaitHelper.waitForElementToBeClickable(
      targetElement,
      timeout,
      message
    );
    await targetElement.click();
  }

  static async setValue(
    targetElement,
    text,
    timeout = DEFAULT_TIMEOUT,
    message = "Element not displayed"
  ) {
    await WaitHelper.waitForElementToBeDisplayed(
      targetElement,
      timeout,
      message
    );
    await targetElement.setValue(text);
  }
}
