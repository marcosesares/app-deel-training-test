import { StepLogger } from "../../../core/config/logger/step-logger";
import HomePage from "./home-page.po";
import BasePage from "../base-page.po";
import BasePageHelper from "../base-page.helper";
import { ElementHelper } from "../../../core/helper/element-helper";
import HomePageConstants from "./home-page.constants";
import { CoreConstants } from "../../../core/core-constants";

const { TIMEOUTS, DEFAULT_TIMEOUT } = CoreConstants;
const {
  attributes: { labels },
} = HomePageConstants;

class HomePageHelper extends BasePageHelper {
  constructor() {
    super();
  }

  async verifyUserTagName(userName) {
    await ElementHelper.verifyElementTextEqualTo(
      HomePage.userTagNameLabel,
      labels.userTagName,
      userName
    );
  }

  async verifyUserGreetingsDisplayedStatus(userName) {
    await ElementHelper.verifyElementDisplayedStatus(
      HomePage.userGreetings,
      labels.userGreetings
    );
  }

  async openSideMenu() {
    await ElementHelper.actionClickIfDisplayed(
      HomePage.mobileHeaderButton,
      labels.sideBurguerMenu,
      DEFAULT_TIMEOUT
    );
  }

  async acceptAllCookies() {
    await ElementHelper.actionClickIfDisplayed(
      HomePage.acceptAllCookiesButton,
      labels.acceptCookiesButton,
      TIMEOUTS.s
    );
  }

  async clickModalNextButton() {
    await ElementHelper.actionClick(
      HomePage.modalNextButton,
      labels.nextButton
    );
    await ElementHelper.actionClick(
      HomePage.modalNextButton,
      labels.nextButton
    );
    await ElementHelper.actionClick(
      HomePage.modalNextButton,
      labels.nextButton
    );
    await ElementHelper.actionClick(
      HomePage.modalDoneButton,
      labels.doneButton
    );
  }
}

export default new HomePageHelper();
