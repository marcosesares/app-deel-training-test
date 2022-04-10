import faker from "@faker-js/faker";
import { CoreConstants } from "../../../core/core-constants";
import DateHelper from "../../../core/helper/date.helper";
import NumberHelper from "../../../core/helper/Number.helper";
import ContractPageConstants from "../contract/contract-page.constants";

const {
  attributes: { labels },
} = ContractPageConstants;

export class Contract {
  contractName;
  jobTitle;
  scopeOfWork;
  day;
  formatedDate;
  paymentRate;
  specialClause;
  paymentRateFormated;
  rateFrequency;
  contractorCountry;
  seniorityLevel;

  static getContract() {
    let contract = {
      contractName: faker.finance.accountName(),
      jobTitle: faker.commerce.department(),
      scopeOfWork: faker.animal.bear(),
      day: DateHelper.getDate(CoreConstants.NUMBER_MINUS_ONE),
      formatedDate: DateHelper.getFormatedDate(CoreConstants.NUMBER_MINUS_ONE),
      paymentRate: CoreConstants.NUMBER_THOUSAND,
      specialClause: faker.animal.bird(),
      paymentRateFormated: NumberHelper.getFormatedMoney(
        CoreConstants.NUMBER_THOUSAND
      ),
      rateFrequency: CoreConstants.RATE_FREQUENCY,
      contractorCountry: labels.contractorCountry,
      seniorityLevel: labels.seniorityLevel,
    };
    return contract;
  }
}
