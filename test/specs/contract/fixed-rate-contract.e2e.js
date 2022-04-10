import { StepLogger } from "../../../core/config/logger/step-logger";
import HomePageHelper from "../../page-objects/home/home-page.helper";
import LoginPageHelper from "../../page-objects/login/login-page.helper";
import contractPageHelper from "../../page-objects/contract/contract-page.helper";
import ContractPageHelper from "../../page-objects/contract/contract-page.helper";
import { Contract } from "../../page-objects/models/contract.model";

const { getContract } = Contract;

describe("Create Fixed Rate Contracts on Deel training application", () => {
  context("Fixed Rate Contract", async () => {
    beforeEach("should login with valid credentials", async () => {
      StepLogger.stepId(1);
      StepLogger.feature("Fixed Rate");
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
      StepLogger.verification("Verify Home page is displayed");
      await HomePageHelper.verifyUserGreetingsDisplayedStatus();

      StepLogger.stepId(3);
      StepLogger.step("Click the Mobile header button");
      await HomePageHelper.openSideMenu();
      StepLogger.verification("Verify User is logged in successfully");
      await HomePageHelper.verifyUserTagName(browser.config.userName);
    });

    it("TC002: should Create Fixed Rate Contracts on Deel training application @e2e", async () => {
      const contract = getContract();
      const colorAttribute = "primary";

      StepLogger.stepId(1);
      StepLogger.step("Click on the 'Create A Contract' link");
      await ContractPageHelper.clickCreateContractLink();
      StepLogger.verification("Verify Contract Type page is displayed");
      await contractPageHelper.verifyContractTypePageTitleDisplayed();

      StepLogger.stepId(2);
      StepLogger.step("Click on the 'Fixed Rate' button");
      await ContractPageHelper.clickFixedRateButton();
      StepLogger.verification(
        "Verify Creating a fixed contract page is displayed"
      );
      await contractPageHelper.verifyCreatingFixedContractPageTitleDisplayed();

      StepLogger.stepId(3);
      StepLogger.step("Fill General Info form");
      await ContractPageHelper.fillContractGeneralInfoForm(contract);
      StepLogger.verification("Verify Payment Details page selected");
      await ContractPageHelper.verifyPaymentDetailsIconColor(colorAttribute);

      StepLogger.stepId(4);
      StepLogger.step("Fill Payment Details form");
      await ContractPageHelper.fillPaymentDetailsForm(contract);
      StepLogger.verification("Verify Define Dates page selected");
      await ContractPageHelper.verifyDefineDatesIconColor(colorAttribute);

      StepLogger.stepId(5);
      StepLogger.step("Fill Define Dates form");
      await ContractPageHelper.fillDefineDatesForm(contract);
      StepLogger.verification("Verify Payment Details page selected");
      await ContractPageHelper.verifyBenefitsAndExtrasIconColor(colorAttribute);

      StepLogger.stepId(6);
      StepLogger.step("Fill Benefits and Extras form");
      await ContractPageHelper.fillBenefitsAndExtrasForm(contract);
      StepLogger.verification("Verify Compliance page selected");
      await ContractPageHelper.verifyComplianceIconColor(colorAttribute);

      StepLogger.stepId(7);
      StepLogger.step("Fill Compliance form");
      await ContractPageHelper.fillComplianceForm(contract);
      StepLogger.verification("Verify the Fixed Rate contract");
      await ContractPageHelper.verifyFixedRateContract(contract);
    });
  });
});
