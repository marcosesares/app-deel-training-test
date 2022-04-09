export default class LoginPageConstants {
  static attributes = {
    selectors: {
      emailInput: "input[placeholder='Type your email']",
      passwordInput: "input[name='password']",
      loginButton:
        "//button[@type='submit' and div[contains(text(),'log in')]]",
    },
    labels: {
      emailInput: "Email Textbox",
      passwordInput: "Password Textbox",
      loginButton: "Log in button",
    },
  };
}
