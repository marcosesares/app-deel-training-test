import BasePagePo from "../base-page.po";
import HomePageConstants from "./home-page.constants";

const {
  attributes: { selectors },
} = HomePageConstants;

class HomePage extends BasePagePo {
  constructor() {
    super();
  }

  get labelUserTagName() {
    return $(selectors.userTagName);
  }

  get labelUserTagName() {
    return $(selectors.userTagName);
  }

  get buttonAcceptAllCookies() {
    return $(selectors.acceptCookies);
  }

  get buttonModalNext() {
    return $(selectors.next);
  }
}

export default new HomePage();
