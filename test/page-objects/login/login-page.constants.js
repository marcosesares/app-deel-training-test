export default class LoginPageConstants {
  static attributes = {
    selectors: {
      email: "input[placeholder='Type your email']",
      password: "input[name='password']",
      logIn: "//button[@type='submit' and div[contains(text(),'log in')]]",
    },
  };
}
