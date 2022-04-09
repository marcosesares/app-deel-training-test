import BasePage from "../base-page.po";
import LoginPageConstants from "./login-page.constants";

const {
  attributes: { selectors },
} = LoginPageConstants;

class LoginPage extends BasePage {
  constructor() {
    super();
  }

  get inputUserEmail() {
    return $(selectors.email);
  }

  get inputPassword() {
    return $(selectors.password);
  }

  get btnLogin() {
    return $(selectors.logIn);
  }
}

export default new LoginPage();
