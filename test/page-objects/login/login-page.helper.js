import { StepLogger } from "../../../core/config/logger/step-logger";
import BasePageHelper from "../base-page.helper";
import LoginPage from "./login-page.po";
import { ElementHelper } from "../../../core/helper/element-helper";
import HomePageHelper from "../home/home-page.helper";
import LoginPageConstants from "./login-page.constants";

const {
  attributes: { labels },
} = LoginPageConstants;

class LoginPageHelper extends BasePageHelper {
  constructor() {
    super();
  }

  async clickTheLoginButton() {
    await ElementHelper.actionClick(LoginPage.loginButton, labels.loginButton);
  }

  async setTheUserPassword(userPassword) {
    await ElementHelper.setValue(
      LoginPage.passwordInput,
      labels.passwordInput,
      userPassword
    );
  }

  async setTheUserEmail(userEmail) {
    await ElementHelper.setValue(
      LoginPage.userEmailInput,
      labels.emailInput,
      userEmail
    );
  }

  async verifyUserEmailInputDisplayed() {
    await ElementHelper.verifyElementDisplayedStatus(
      LoginPage.userEmailInput,
      labels.emailInput
    );
  }

  async verifyUserPasswordInputDisplayed() {
    await ElementHelper.verifyElementDisplayedStatus(
      LoginPage.passwordInput,
      labels.passwordInput
    );
  }

  async verifyLoginButtonDisplayed() {
    await ElementHelper.verifyElementDisplayedStatus(
      LoginPage.loginButton,
      labels.loginButton
    );
  }

  async verifyLoginPage() {
    await this.verifyUserEmailInputDisplayed();
    await this.verifyUserPasswordInputDisplayed();
    await this.verifyLoginButtonDisplayed();
  }

  async login(userEmail, userPassword) {
    await this.setTheUserEmail(userEmail);
    await this.setTheUserPassword(userPassword);
    await this.clickTheLoginButton();
    await HomePageHelper.acceptAllCookies();
    await HomePageHelper.clickModalNextButton();
  }

  async open() {
    return await super.open("login");
  }
}

export default new LoginPageHelper();
