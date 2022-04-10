import { StepLogger } from "../../../core/config/logger/step-logger";
import ContractPage from "./contract-page.po";
import BasePageHelper from "../base-page.helper";
import { ElementHelper } from "../../../core/helper/element-helper";
import { CoreConstants } from "../../../core/core-constants";
import ContractPageConstants from "./contract-page.constants";
import { DateHelper } from "./../../../core/helper/date.helper";
import { Contract } from "../models/contract.model";
import { HtmlHelper } from "../../../core/helper/html.helper";

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

  async clickPayAsYouGoButton() {
    await ElementHelper.actionClick(
      ContractPage.payAsYouGoButton,
      labels.payAsYouGoButton
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

  async verifyCreatingPayAsYouGoContractPageTitleDisplayed() {
    await ElementHelper.verifyElementDisplayedStatus(
      ContractPage.creatingPayAsYouGoContractPageTitle,
      labels.creatingPayAsYouGoContractPageTitle
    );
  }

  async verifyContractorStartDateLabelValue(date) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.contractorStartDateLabel,
      labels.contractorStartDateLabel,
      date
    );
  }

  async verifyContractTypeLabelValue(value) {
    await ElementHelper.verifyElementTextEqualTo(
      ContractPage.contractTypeLabel,
      labels.contractTypeLabel,
      value
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

  async verifyPaymentDetailsIconColor(value) {
    await ElementHelper.verifyElementAttributeValue(
      ContractPage.paymentDetailsIcon,
      labels.paymentDetailsIcon,
      HtmlHelper.attributes.color,
      value
    );
  }

  async verifyDefineDatesIconColor(value) {
    await ElementHelper.verifyElementAttributeValue(
      ContractPage.defineDatesIcon,
      labels.defineDatesIcon,
      HtmlHelper.attributes.color,
      value
    );
  }

  async verifyBenefitsAndExtrasIconColor(value) {
    await ElementHelper.verifyElementAttributeValue(
      ContractPage.benefitsAndExtrasIcon,
      labels.benefitsAndExtrasIcon,
      HtmlHelper.attributes.color,
      value
    );
  }

  async verifyComplianceIconColor(value) {
    await ElementHelper.verifyElementAttributeValue(
      ContractPage.complianceIcon,
      labels.complianceIcon,
      HtmlHelper.attributes.color,
      value
    );
  }

  async verifyContract(contract) {
    await this.verifyContractNameLabelValue(contract.contractName);
    await this.verifyContractorStartDateLabelValue(contract.formatedDate);
    await this.verifyJobTitleLabelValue(contract.jobTitle);
    await this.verifySeniorityLevelLabelValue(contract.seniorityLevel);
    await this.verifyRateLabelValue(contract.paymentRateFormated);
    await this.verifyRateFequencyLabelValue(contract.rateFrequency);
    await this.verifyScopeLabelValue(contract.scopeOfWork);
    await this.verifyContractorsCountryLabelValue(contract.contractorCountry);
    await this.verifySpecialClauseLabelValue(contract.specialClause);
  }

  async verifyFixedRateContract(contract) {
    await this.verifyContractTypeLabelValue(labels.fixedRateContractType);
    await this.verifyContract(contract);
  }

  async verifyPayAsYouGoContract(contract) {
    await this.verifyContractTypeLabelValue(labels.payAsYouGoContractType);
    await this.verifyContract(contract);
  }

  async fillContractGeneralInfoForm(contract) {
    await this.setContractName(contract.contractName);
    await this.clickContractorTaxResidenceButton();
    await this.clickUnitedStatesItem();
    await this.clickChooseStateButton();
    await this.clickColoradoStateItem();
    await this.setJobTitleInput(contract.jobTitle);
    await this.clickSeniorityLevelButton();
    await this.clickNotApplicableItem();
    await this.setScopeOfWorkTextarea(contract.scopeOfWork);
    await this.clickContractorStartDateButton();
    await this.clickCalendarDayButton(contract.day);
    await this.clickNextButton();
  }

  async fillPaymentDetailsForm(contract) {
    await this.clickCurrencyButton();
    await this.clickBritishPoundItem();
    await this.setPaymentRateInput(contract.paymentRate);
    await this.clickPaymentFrequencyButton();
    await this.clickWeeklyItem();
    await this.clickNextButton();
  }

  async fillDefineDatesForm(contract) {
    await this.clickNextButton();
  }

  async fillBenefitsAndExtrasForm(contract) {
    await this.clickAddSpecialClauseButton();
    await this.setSpecialClauseTextarea(contract.specialClause);
    await this.clickNextButton();
  }

  async fillComplianceForm(contract) {
    await this.clickCreateContractButton();
  }
}

export default new ContractPageHelper();
