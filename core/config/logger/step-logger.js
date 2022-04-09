import logger from "./logger";
import allure from "@wdio/allure-reporter";

const { startStep, addStep, endStep, addAttachment, addFeature } =
  require("@wdio/allure-reporter").default;
export class StepLogger {
  static id;
  static testCaseId;
  static logMessages = "";
  static debug = process.env.DEBUG;
  static allureLog = process.env.ALLURE_LOG;
  static eachStepScreenshot = process.env.EACH_STEP_SCREENSHOT;
  static testStart;

  static setCaseId(theCaseId) {
    this.testCaseId = theCaseId;
    logger.debug(this.logMessages);
    this.id = 1;
    this.logMessages = "";
    this.testStart = new Date().getTime();
  }

  static feature(featureName) {
    if (StepLogger.allureLog) {
      addFeature(featureName);
    }
  }

  static step(stepName) {
    let operation = "Pre-Condition";
    if (this.testCaseId) {
      operation = "Step";
    }
    this.commonLogger(operation, stepName);
  }

  static stepId(optionalId = 0) {
    this.id = optionalId > 0 ? optionalId : this.id + 1;
    this.commonLogger("Step Id", this.id.toString());
  }

  static commonLogger(operation, step, logStep = true) {
    let caseIdLog = this.testCaseId ? ` - ${this.testCaseId}` : "";
    let message = `${caseIdLog} - *${operation}* - ${step}`;
    if (this.testStart !== undefined) {
      const passed = new Date().getTime() - this.testStart;
      message = ` +${passed / 1000}s ${message}`;
    }
    if (this.debug) {
      console.log(`${this.testCaseId || ""}${message}`);
    }
    if (logger) {
      logger.debug(message);
      if (logStep) {
        addStep(message);
      }
    } else {
      this.logMessages += message;
    }
  }

  static verification(verificationDescription) {
    this.commonLogger("Verification", verificationDescription);
  }

  static async takeScreenShot(attachmentName) {
    if (StepLogger.allureLog) {
      startStep(attachmentName);
      addStep(attachmentName);
      addAttachment(
        attachmentName,
        await browser.takeScreenshot().then((png) => {
          return Buffer.from(png, "base64");
        }),
        "image/png"
      );
      endStep("passed");
    }
  }

  static preCondition(preConditionDescription) {
    this.commonLogger("Pre-Condition", preConditionDescription);
  }

  static postCondition(postConditionDescription) {
    this.commonLogger("Post-Condition", postConditionDescription);
  }

  static subStep(stepName) {
    this.commonLogger("Sub-Step", stepName, false);
    if (this.eachStepScreenshot) {
      this.takeScreenShot(`Sub-step: ${stepName}`);
    }
  }

  static subVerification(verificationDescription) {
    this.commonLogger("Sub-Verification", verificationDescription, false);
    if (this.eachStepScreenshot) {
      this.takeScreenShot(`Sub-verification: ${verificationDescription}`);
    }
  }
}
