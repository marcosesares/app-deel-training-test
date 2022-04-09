export default class BasePageHelper {
  constructor() {}

  async open(path) {
    return await browser.url(`/${path}`);
  }
}
