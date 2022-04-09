import { StepLogger } from "../../../core/config/logger/step-logger";
import ContractPage from "./contract-page.po";
import BasePageHelper from "../base-page.helper";
import { ElementHelper } from "../../../core/helper/element-helper";
import { CoreConstants } from "../../../core/core-constants";
import ContractPageConstants from "./contract-page.constants";
import { DateHelper } from "./../../../core/helper/date.helper";

const { TIMEOUTS, DEFAULT_TIMEOUT } = CoreConstants;
const {
  attributes: { labels },
} = ContractPageConstants;

class ContractPageHelper extends BasePageHelper {
  constructor() {
    super();
  }

  async clickCreateContractLink() {
    await ElementHelper.actionClick(
      ContractPage.createContractLink,
      labels.createContractLink
    );
  }

  async verifyReviewContractDetailsLabelDisplayed() {
    await ElementHelper.verifyElementDisplayedStatus(
      ContractPage.reviewContractDetailsLabel,
      labels.reviewContractDetailsLabel
    );
  }

  async clickFixedRateButton() {
    await ElementHelper.actionClick(
      ContractPage.fixedRateButton,
      labels.fixedRateButton
    );
  }

  async setContractName(text) {
    await ElementHelper.setValue(
      ContractPage.contractNameInput,
      labels.contractNameInput,
      text
    );
  }

  async clickContractorTaxResidenceButton() {
    await ElementHelper.actionClick(
      ContractPage.contractorTaxResidenceButton,
      labels.contractorTaxResidenceButton
    );
  }

  async clickUnitedStatesItem() {
    await ElementHelper.actionClick(
      ContractPage.unitedStatesItem,
      labels.unitedStatesItem
    );
  }

  async clickChooseStateButton() {
    await ElementHelper.actionClick(
      ContractPage.chooseStateButton,
      labels.chooseStateButton
    );
  }

  async clickColoradoStateItem() {
    await ElementHelper.actionClick(
      ContractPage.coloradoStateItem,
      labels.coloradoStateItem
    );
  }

  async setJobTitleInput(text) {
    await ElementHelper.setValue(
      ContractPage.jobTitleInput,
      labels.jobTitleInput,
      text
    );
  }

  async clickSeniorityLevelButton() {
    await ElementHelper.actionClick(
      ContractPage.seniorityLevelButton,
      labels.seniorityLevelButton
    );
  }

  async clickNotApplicableItem() {
    await ElementHelper.actionClick(
      ContractPage.notApplicableItem,
      labels.notApplicableItem
    );
  }

  async setScopeOfWorkTextarea(text) {
    await ElementHelper.setValue(
      ContractPage.scopeOfWorkTextarea,
      labels.scopeOfWorkTextarea,
      text
    );
  }

  async clickContractorStartDateButton() {
    await ElementHelper.actionClick(
      ContractPage.contractorStartDateButton,
      labels.contractorStartDateButton
    );
  }

  async clickCalendarDayButton(day) {
    const elementName = `the ${day} day item`;
    await ElementHelper.actionClick(
      ContractPage.getCalendarDayBeforeToday(day),
      elementName
    );
  }

  async clickNextButton() {
    await ElementHelper.actionClick(ContractPage.nextButton, labels.nextButton);
  }

  async clickCurrencyButton() {
    await ElementHelper.actionClick(
      ContractPage.currencyButton,
      labels.currencyButton
    );
  }

  async clickBritishPoundItem() {
    await ElementHelper.actionClick(
      ContractPage.britishPoundItem,
      labels.britishPoundItem
    );
  }

  async setPaymentRateInput(text) {
    await ElementHelper.setValue(
      ContractPage.paymentRateInput,
      labels.paymentRateInput,
      text
    );
  }

  async clickPaymentFrequencyButton() {
    await ElementHelper.actionClick(
      ContractPage.paymentFrequencyButton,
      labels.paymentFrequencyButton
    );
  }

  async clickWeeklyItem() {
    await ElementHelper.actionClick(ContractPage.weeklyItem, labels.weeklyItem);
  }

  async clickAddSpecialClauseButton() {
    await ElementHelper.actionClick(
      ContractPage.addSpecialClauseButton,
      labels.addSpecialClauseButton
    );
  }

  async setSpecialClauseTextarea(text) {
    await ElementHelper.setValue(
      ContractPage.specialClauseTextarea,
      labels.specialClauseTextarea,
      text
    );
  }

  async clickCreateContractButton() {
    await ElementHelper.actionClick(
      ContractPage.createContractButton,
      labels.createContractButton
    );
  }

  async verifyContractNameLabelValue(value) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.contractNameLabel,
      labels.contractNameLabel,
      value
    );
  }

  async verifyContractTypePageTitleDisplayed() {
    await ElementHelper.verifyElementDisplayedStatus(
      ContractPage.contractTypePageTitle,
      labels.contractTypePageTitle
    );
  }

  async verifyCreatingFixedContractPageTitleDisplayed() {
    await ElementHelper.verifyElementDisplayedStatus(
      ContractPage.creatingFixedContractPageTitle,
      labels.creatingFixedContractPageTitle
    );
  }

  async verifyContractorStartDateLabelValue(date) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.contractorStartDateLabel,
      labels.contractorStartDateLabel,
      date
    );
  }

  async verifyContractTypeLabelDisplayed() {
    await ElementHelper.verifyElementDisplayedStatus(
      ContractPage.contractTypeLabel,
      labels.contractTypeLabel
    );
  }

  async verifyJobTitleLabelValue(value) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.jobTitleLabel,
      labels.jobTitleLabel,
      value
    );
  }

  async verifySeniorityLevelLabelValue(value) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.seniorityLevelLabel,
      labels.seniorityLevelLabel,
      value
    );
  }

  async verifyRateLabelValue(value) {
    await ElementHelper.verifyElementTextContains(
      ContractPage.rateLabel,
      labels.rateLabel,
      value
    );
  }

  async verifyRateFequencyLabelValue(value) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.rateFequencyLabel,
      labels.rateFequencyLabel,
      value
    );
  }

  async verifyScopeLabelValue(value) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.scopeLabel,
      labels.scopeLabel,
      value
    );
  }

  async verifyContractorsCountryLabelValue(value) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.contractorsCountryLabel,
      labels.contractorsCountryLabel,
      value
    );
  }

  async verifySpecialClauseLabelValue(value) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.specialClauseLabel,
      labels.specialClauseLabel,
      value
    );
  }
}

export default new ContractPageHelper();
