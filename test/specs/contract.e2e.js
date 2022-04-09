import { StepLogger } from "../../core/config/logger/step-logger";
import { CoreConstants } from "../../core/core-constants";
import DateHelper from "../../core/helper/date.helper";
import HomePageHelper from "../page-objects/home/home-page.helper";
import LoginPageHelper from "../page-objects/login/login-page.helper";
import contractPageHelper from "./../page-objects/contract/contract-page.helper";
import ContractPageHelper from "./../page-objects/contract/contract-page.helper";
import NumberHelper from "./../../core/helper/Number.helper";

const contract = {
  contractName: "Test Contract",
  jobTitle: "Test Job Title",
  scopeOfWork: "Test scope of work",
  day: DateHelper.getDate(CoreConstants.NUMBER_MINUS_ONE),
  formatedDate: DateHelper.getFormatedDate(CoreConstants.NUMBER_MINUS_ONE),
  paymentRate: CoreConstants.NUMBER_THOUSAND,
  specialClause: "Test special clause",
  paymentRateFormated: NumberHelper.getFormatedMoney(
    CoreConstants.NUMBER_THOUSAND
  ),
  rateFrequency: "Weekly",
  contractorCountry: "Colorado (United States)",
  seniorityLevel: "Not applicable",
};

describe("Create Contracts on Deel training application", () => {
  context("Contract", async () => {
    beforeEach("should login with valid credentials", async () => {
      StepLogger.stepId(1);
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

    it("TC002: should login with valid credentials @e2e", async () => {
      StepLogger.stepId(1);
      StepLogger.step("Click on the 'Create A Contract' link");
      await ContractPageHelper.clickCreateContractLink();
      StepLogger.verification("Verify Contract Type page is displayed");
      await contractPageHelper.verifyContractTypePageTitleDisplayed();

      StepLogger.stepId(2);
      StepLogger.step("Click on the 'Fixed' button");
      await ContractPageHelper.clickFixedRateButton();
      StepLogger.verification(
        "Verify Creating a fixed contract page is displayed"
      );
      await contractPageHelper.verifyCreatingFixedContractPageTitleDisplayed();

      StepLogger.stepId(3);
      StepLogger.step("Create a fixed contract");
      await ContractPageHelper.createContract(contract);
      StepLogger.verification(
        "Verify Creating a fixed contract page is displayed"
      );
      await ContractPageHelper.verifyContract(contract);
    });
  });
});
