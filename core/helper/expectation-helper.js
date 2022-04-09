import { ValidationsHelper } from "./validations-helper";

export class ExpectationHelper {
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
}
