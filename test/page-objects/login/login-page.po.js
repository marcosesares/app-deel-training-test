import BasePage from "../base-page.po";
import LoginPageConstants from "./login-page.constants";

const {
  attributes: { selectors },
} = LoginPageConstants;

class LoginPage extends BasePage {
  constructor() {
    super();
  }

  get userEmailInput() {
    return $(selectors.emailInput);
  }

  get passwordInput() {
    return $(selectors.passwordInput);
  }

  get loginButton() {
    return $(selectors.loginButton);
  }
}

export default new LoginPage();
