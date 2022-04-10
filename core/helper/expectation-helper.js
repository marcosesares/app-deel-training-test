import { StepLogger } from "../config/logger/step-logger";
import { ValidationsHelper } from "./validations-helper";

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
    await expect(targetElement).toHaveTextContaining(expectedValue);
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
    await expect(targetElement).toHaveText(expectedValue);
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
    await expect(targetElement).toHaveAttribute(
      elementAttribute,
      expectedValue
    );
  }

  static async verifyElementDisplayedStatus(targetElement, elementName) {
    const message = ValidationsHelper.getDisplayedValidation(elementName);
    StepLogger.subVerification(message);
    await expect(targetElement).toBeDisplayed();
  }
}
