export default class ContractPageConstants {
  static attributes = {
    selectors: {
      createContractLink: "//p[normalize-space()='Create A Contract']",
      contractTypePageTitle: "//h1[normalize-space()='Contract Type']",
      fixedRateButton: "//h4[normalize-space()='Fixed Rate']",
      creatingFixedContractPageTitle:
        "//h2[normalize-space()='Creating a fixed contract']",
      contractorStartDateButton:
        "//div[contains(@class,'input_dropdown-icon')]//i",
      contractNameInput: "input[name='name']",
      contractorTaxResidenceButton:
        "//div[contains(@data-qa,'contractor-tax-residence')]//div[contains(@class,'deel-ui__select__dropdown-indicator')]",
      unitedStatesItem:
        "//div[contains(@class,'deel-ui__select__option')]/div[contains(text(), 'United States')]",
      chooseStateButton:
        "//div[@data-qa='contractor-tax-residence-province']//div[contains(@class,'deel-ui__select__dropdown-indicator')]",
      coloradoStateItem:
        "//div[contains(@class,'deel-ui__select__option-container') and contains(text(), 'Colorado')]",
      jobTitleInput: "input[name='jobTitle']",
      seniorityLevelButton:
        "//div[@data-qa='selector-seniority-level']//div[contains(@class,'deel-ui__select__dropdown-indicator')]",
      notApplicableItem:
        "//div[contains(@class,'deel-ui__select__option-container') and contains(text(), 'Not applicable')]",
      scopeOfWorkTextarea: "textarea[name='scope']",
      nextButton: "//button[div[contains(text(),'next')]]",
      currencyButton:
        "//div[@data-qa='currency-select']//div[contains(@class,'deel-ui__select__dropdown-indicator')]",
      britishPoundItem:
        "//div[contains(@class,'deel-ui__select__option-container') and contains(text(), 'GBP - British Pound')]",
      paymentRateInput: "input[name='rate']",
      paymentFrequencyButton:
        "//div[@data-qa='cycle-select']//div[contains(@class,'deel-ui__select__dropdown-indicator')]",
      weeklyItem:
        "//div[contains(@class,'deel-ui__select__option-container') and contains(text(), 'Weekly')]",
      addSpecialClauseButton: "//button[@data-qa='add-a-special-clause']",
      specialClauseTextarea: "//textarea[contains(@class,'textarea')]",
      createContractButton: "//button[@data-qa='create-contract']",
      contractNameLabel: "//div[@class='editable-text']//h1",
      contractorStartDateLabel: "//div[@data-qa='contractors-start-date']//div",
      contractTypeLabel: "//h4[normalize-space()='Fixed rate']",
      jobTitleLabel: "//div[@data-qa='job-title']/h4",
      seniorityLevelLabel: "//div[@data-qa='seniority-level']/h4",
      rateLabel: "//div[@data-qa='rate']/h4",
      rateFequencyLabel: "//div[@data-qa='rate']/h4/div",
      scopeLabel: "//div[@data-qa='dpa-row-undefined-value']/p",
      contractorsCountryLabel: "//div[@data-qa='contractors-country']/h4",
      specialClauseLabel:
        "//div[@data-qa='dpa-row-special-clause-value']/div[@class='pre-wrap']",
      reviewContractDetailsLabel:
        "//h4[@class='subtitle'][text()='Review the contract details']",
    },
    labels: {
      createContractLink: "Create A Contract link",
      contractTypePageTitle: "Contract Type",
      fixedRateButton: "Fixed Rate Button",
      creatingFixedContractPageTitle: "Creating a fixed contract",
      contractorStartDateButton: "Contractor's start date button",
      contractNameInput: "Contract name textbox",
      contractorTaxResidenceButton: "Contractor's tax residence button",
      unitedStatesItem: "United States menu item",
      chooseStateButton: "Choose a state",
      coloradoStateItem: "Colorado menu item",
      jobTitleInput: "Job title textbox",
      seniorityLevelButton: "Seniority level",
      notApplicableItem: "Not applicable menu item",
      scopeOfWorkTextarea: "Scope of work textarea",
      nextButton: "Next button",
      currencyButton: "Currency button",
      britishPoundItem: "GBP - British Pound menu item",
      paymentRateInput: "Payment rate textbox",
      paymentFrequencyButton: "Payment frequency menu item",
      weeklyItem: "Weekly menu item",
      addSpecialClauseButton: "Add A Special Clause link",
      specialClauseTextarea: "Special clause textarea",
      createContractButton: "Create Contract",
      contractNameLabel: "Contract Name label",
      contractorStartDateLabel: "Contractor's start date label",
      contractTypeLabel: "Contrac Type label",
      jobTitleLabel: "Job title label",
      seniorityLevelLabel: "Seniority level label",
      rateLabel: "Payment rate label",
      rateFequencyLabel: "Payment rate frequency label",
      scopeLabel: "Scope label",
      contractorsCountryLabel: "Contractor's Country label",
      specialClauseLabel: "Special clause label",
      reviewContractDetailsLabel: "Review the contract details label",
    },
  };

  static getCalendarDayBeforeToday(day) {
    return `//button[contains(@class,'react-calendar__tile--now')]/preceding-sibling::button[abbr[normalize-space(text())='${day}']]`;
  }
}
