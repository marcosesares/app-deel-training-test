import { StepLogger } from "../../../core/config/logger/step-logger";
import BasePageHelper from "../base-page.helper";
import LoginPage from "./login-page.po";
import { ElementHelper } from "../../../core/helper/element-helper";
import { WaitHelper } from "../../../core/helper/wait-helper";
import HomePageHelper from "../home/home-page.helper";

class LoginPageHelper extends BasePageHelper {
  constructor() {
    super();
  }

  async clickTheLoginButton() {
    StepLogger.subStep("Click the Log in button");
    await ElementHelper.actionClick(LoginPage.btnLogin);
  }

  async setTheUserPassword(userPassword) {
    StepLogger.subStep("Type user password");
    await ElementHelper.setValue(LoginPage.inputPassword, userPassword);
  }

  async setTheUserEmail(userEmail) {
    StepLogger.subStep(`Type user email: ${userEmail}`);
    await LoginPage.inputUserEmail.setValue(userEmail);
  }

  async login(userEmail, userPassword) {
    await this.setTheUserEmail(userEmail);
    await this.setTheUserPassword(userPassword);
    await this.clickTheLoginButton();
    await HomePageHelper.acceptAllCookies();
    await WaitHelper.pause();
    await HomePageHelper.clickModalNextButton();
  }

  open() {
    return super.open("login");
  }
}

export default new LoginPageHelper();
