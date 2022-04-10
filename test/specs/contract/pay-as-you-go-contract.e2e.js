import { StepLogger } from "../../../core/config/logger/step-logger";
import HomePageHelper from "../../page-objects/home/home-page.helper";
import LoginPageHelper from "../../page-objects/login/login-page.helper";
import contractPageHelper from "../../page-objects/contract/contract-page.helper";
import ContractPageHelper from "../../page-objects/contract/contract-page.helper";

describe("Create Pay As You Go Contracts on Deel training application", () => {
  context("Pay As You Go Contract", async () => {
    beforeEach("should login with valid credentials", async () => {
      StepLogger.stepId(1);
      StepLogger.feature("Pay As You Go");
      StepLogger.step("Open deel login page");
      await LoginPageHelper.open();
      StepLogger.verification("Verify Login page is displayed");
      await LoginPageHelper.verifyLoginPage();

      StepLogger.stepId(2);
      StepLogger.step("Login to deel app");
      await LoginPageHelper.login(
        browser.config.userEmail,
        browser.config.userPassword
      );
      StepLogger.verification("Verify Page side burguer menu is displayed");
      await HomePageHelper.verifySideMenuDisplayed();

      StepLogger.stepId(3);
      StepLogger.step("Click the Mobile header button");
      await HomePageHelper.openSideMenu();
      StepLogger.verification("Verify User is logged in successfully");
      await HomePageHelper.verifyUserTagName(browser.config.userName);
    });

    it("TC002: should Create Pay As You Go Contracts on Deel training application @e2e", async () => {
      const contract = ContractPageHelper.getContract();

      StepLogger.stepId(1);
      StepLogger.step("Click on the 'Create A Contract' link");
      await ContractPageHelper.clickCreateContractLink();
      StepLogger.verification("Verify Contract Type page is displayed");
      await contractPageHelper.verifyContractTypePageTitleDisplayed();

      StepLogger.stepId(2);
      StepLogger.step("Click on the 'Pay As You Go' button");
      await ContractPageHelper.clickPayAsYouGoButton();
      StepLogger.verification(
        "Verify Creating a pay as you go contract page is displayed"
      );
      await contractPageHelper.verifyCreatingPayAsYouGoContractPageTitleDisplayed();

      StepLogger.stepId(3);
      StepLogger.step("Create a Pay As You Go contract");
      await ContractPageHelper.createContract(contract);
      StepLogger.verification("Verify the Pay As You Go contract");
      await ContractPageHelper.verifyPayAsYouGoContract(contract);
    });
  });
});
