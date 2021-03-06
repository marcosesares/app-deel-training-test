import BasePagePo from "../base-page.po";
import ContractPageConstants from "./contract-page.constants";

const {
  attributes: { selectors },
} = ContractPageConstants;

class ContractPage extends BasePagePo {
  constructor() {
    super();
  }

  get createContractLink() {
    return $(selectors.createContractLink);
  }

  get contractTypePageTitle() {
    return $(selectors.contractTypePageTitle);
  }

  get fixedRateButton() {
    return $(selectors.fixedRateButton);
  }

  get payAsYouGoButton() {
    return $(selectors.payAsYouGoButton);
  }

  get creatingFixedContractPageTitle() {
    return $(selectors.creatingFixedContractPageTitle);
  }

  get creatingPayAsYouGoContractPageTitle() {
    return $(selectors.creatingPayAsYouGoContractPageTitle);
  }

  get contractorStartDateButton() {
    return $(selectors.contractorStartDateButton);
  }

  get contractNameInput() {
    return $(selectors.contractNameInput);
  }

  get contractorTaxResidenceButton() {
    return $(selectors.contractorTaxResidenceButton);
  }

  get unitedStatesItem() {
    return $(selectors.unitedStatesItem);
  }

  get chooseStateButton() {
    return $(selectors.chooseStateButton);
  }

  get coloradoStateItem() {
    return $(selectors.coloradoStateItem);
  }

  get jobTitleInput() {
    return $(selectors.jobTitleInput);
  }

  get seniorityLevelButton() {
    return $(selectors.seniorityLevelButton);
  }

  get notApplicableItem() {
    return $(selectors.notApplicableItem);
  }

  get scopeOfWorkTextarea() {
    return $(selectors.scopeOfWorkTextarea);
  }

  get nextButton() {
    return $(selectors.nextButton);
  }

  get currencyButton() {
    return $(selectors.currencyButton);
  }

  get britishPoundItem() {
    return $(selectors.britishPoundItem);
  }

  get paymentRateInput() {
    return $(selectors.paymentRateInput);
  }

  get paymentFrequencyButton() {
    return $(selectors.paymentFrequencyButton);
  }

  get weeklyItem() {
    return $(selectors.weeklyItem);
  }

  get addSpecialClauseButton() {
    return $(selectors.addSpecialClauseButton);
  }

  get specialClauseTextarea() {
    return $(selectors.specialClauseTextarea);
  }

  get createContractButton() {
    return $(selectors.createContractButton);
  }

  get contractNameLabel() {
    return $(selectors.contractNameLabel);
  }

  get contractorStartDateLabel() {
    return $(selectors.contractorStartDateLabel);
  }

  get contractTypeLabel() {
    return $(selectors.contractTypeLabel);
  }

  get jobTitleLabel() {
    return $(selectors.jobTitleLabel);
  }

  get seniorityLevelLabel() {
    return $(selectors.seniorityLevelLabel);
  }

  get rateLabel() {
    return $(selectors.rateLabel);
  }

  get rateFequencyLabel() {
    return $(selectors.rateFequencyLabel);
  }

  get scopeLabel() {
    return $(selectors.scopeLabel);
  }

  get contractorsCountryLabel() {
    return $(selectors.contractorsCountryLabel);
  }

  get specialClauseLabel() {
    return $(selectors.specialClauseLabel);
  }

  get reviewContractDetailsLabel() {
    return $(selectors.reviewContractDetailsLabel);
  }

  get paymentDetailsIcon() {
    return $(selectors.paymentDetailsIcon);
  }

  get defineDatesIcon() {
    return $(selectors.defineDatesIcon);
  }

  get benefitsAndExtrasIcon() {
    return $(selectors.benefitsAndExtrasIcon);
  }

  get complianceIcon() {
    return $(selectors.complianceIcon);
  }

  getCalendarDayBeforeToday(day) {
    return $(ContractPageConstants.getCalendarDayBeforeToday(day));
  }
}

export default new ContractPage();
