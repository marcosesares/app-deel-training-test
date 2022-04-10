import BasePagePo from "../base-page.po";
import HomePageConstants from "./home-page.constants";

const {
  attributes: { selectors },
} = HomePageConstants;

class HomePage extends BasePagePo {
  constructor() {
    super();
  }

  get mobileHeaderButton() {
    return $(selectors.mobileHeaderButton);
  }

  get userGreetings() {
    return $(selectors.userGreetings);
  }

  get userTagNameLabel() {
    return $(selectors.userTagNameLabel);
  }

  get acceptAllCookiesButton() {
    return $(selectors.acceptCookiesButton);
  }

  get modalNextButton() {
    return $(selectors.nextButton);
  }

  get modalDoneButton() {
    return $(selectors.doneButton);
  }
}

export default new HomePage();
