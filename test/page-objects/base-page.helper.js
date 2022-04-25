import { StepLogger } from "../../core/config/logger/step-logger";
import { WaitHelper } from "./../../core/helper/wait-helper";

export default class BasePageHelper {
  constructor() {}

  async open(path) {
    let browserUrl = `${browser.config.baseUrl}/${path}`;
    let message = `Opening Url: ${browserUrl}`;
    await browser.url(`/${path}`);
    await WaitHelper.waitForBrowserUrl(browserUrl);
    await StepLogger.subStep(message);
  }
}
