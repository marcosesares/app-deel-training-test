export default class BasePageHelper {
  constructor() {}

  open(path) {
    return browser.url(`/${path}`);
  }
}
