import { StepLogger } from "../config/logger/step-logger";
import { ValidationsHelper } from "./validations-helper";
import { WaitHelper } from "./wait-helper";

export class ExpectationHelper {
  static async verifyElementTextContains(
    targetElement,
    elementName,
    expectedValue
  ) {
    const message = ValidationsHelper.getFieldTextContainsValidation(
      elementName,
      expectedValue
    );
    StepLogger.subVerification(message);
    try {
      await expect(targetElement).toHaveTextContaining(expectedValue);
    } catch (error) {
      await StepLogger.logError(
        "EXPECT",
        `Could not achieve expectation [${message}].`
      );
      throw error;
    }
  }

  static async verifyElementTextEqualTo(
    targetElement,
    elementName,
    expectedValue
  ) {
    const message = ValidationsHelper.getFieldTextEqualsToValidation(
      elementName,
      expectedValue
    );
    StepLogger.subVerification(message);
    try {
      await expect(targetElement).toHaveText(expectedValue);
    } catch (error) {
      await StepLogger.logError(
        "EXPECT",
        `Could not achieve expectation [${message}].`
      );
      throw error;
    }
  }

  static async verifyElementAttributeValue(
    targetElement,
    elementName,
    elementAttribute,
    expectedValue
  ) {
    const message = ValidationsHelper.getFieldFieldAttributeEqualsToValidation(
      elementAttribute,
      elementName,
      expectedValue
    );
    StepLogger.subVerification(message);
    try {
      await WaitHelper.waitForElementAttributeValue(
        targetElement,
        elementAttribute,
        expectedValue,
        message
      );
      await expect(targetElement).toHaveAttribute(
        elementAttribute,
        expectedValue
      );
    } catch (error) {
      await StepLogger.logError(
        "EXPECT",
        `Could not achieve expectation [${message}].`
      );
      throw error;
    }
  }

  static async verifyElementDisplayedStatus(targetElement, elementName) {
    const message = ValidationsHelper.getDisplayedValidation(elementName);
    StepLogger.subVerification(message);
    try {
      await expect(targetElement).toBeDisplayed();
    } catch (error) {
      await StepLogger.logError(
        "EXPECT",
        `Could not achieve expectation [${message}].`
      );
      throw error;
    }
  }
}
