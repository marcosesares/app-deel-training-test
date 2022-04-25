import { StepLogger } from "../../../core/config/logger/step-logger";
import HomePageHelper from "../../page-objects/home/home-page.helper";
import LoginPageHelper from "../../page-objects/login/login-page.helper";

describe("Login on Deel training application", () => {
  context("Login", async () => {
    beforeEach("Open Deel Login page", async () => {
      StepLogger.setCaseId("Pre-Condition");
      StepLogger.preCondition("Open deel login page");
      await LoginPageHelper.open();
      StepLogger.verification("Verify Login page is displayed");
      await LoginPageHelper.verifyLoginPage();
    });

    it("TC001: should login with valid credentials @smoke", async () => {
      StepLogger.feature("Login");
      StepLogger.setCaseId("TC001");

      StepLogger.stepId(1);
      StepLogger.step("Login to deel app");
      await LoginPageHelper.login(
        browser.config.userEmail,
        browser.config.userPassword
      );
      StepLogger.verification("Verify Home page is displayed");
      await HomePageHelper.verifyUserGreetingsDisplayedStatus();

      StepLogger.stepId(2);
      StepLogger.step("Click the Mobile header button");
      await HomePageHelper.openSideMenu();
      StepLogger.verification("Verify User is logged in successfully");
      await HomePageHelper.verifyUserTagName(browser.config.userName);
    });
  });
});
