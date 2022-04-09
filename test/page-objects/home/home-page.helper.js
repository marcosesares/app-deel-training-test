import { StepLogger } from "../../../core/config/logger/step-logger";
import HomePage from "./home-page.po";
import BasePage from "../base-page.po";
import BasePageHelper from "../base-page.helper";
import { ElementHelper } from "../../../core/helper/element-helper";
import HomePageConstants from "./home-page.constants";
import { CoreConstants } from "../../../core/core-constants";

const { TIMEOUTS } = CoreConstants;
const {
  attributes: { labels },
} = HomePageConstants;

class HomePageHelper extends BasePageHelper {
  constructor() {
    super();
  }

  async verifyUserTagName(userName) {
    await ElementHelper.verifyElementTextEqualTo(
      HomePage.labelUserTagName,
      labels.userTagName,
      userName
    );
  }

  async acceptAllCookies() {
    StepLogger.subStep("Click the Accept All Cookies button");
    await ElementHelper.actionClickIfDisplayed(
      HomePage.buttonAcceptAllCookies,
      TIMEOUTS.s
    );
  }

  async clickModalNextButton() {
    StepLogger.subStep("Click the Next button under What's new modal dialog");
    await ElementHelper.actionClickUntilDisplayed(
      HomePage.buttonModalNext,
      TIMEOUTS.l
    );
  }
}

export default new HomePageHelper();
