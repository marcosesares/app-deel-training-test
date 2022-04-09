export default class HomePageConstants {
  static attributes = {
    selectors: {
      userTagNameLabel: "//h4[contains(@class,'user-tag-name')]",
      acceptCookiesButton: "#CybotCookiebotDialogBodyButtonAccept",
      nextButton: "//button[div[span[normalize-space(text())='Next']]]",
      doneButton: "//button[div[span[normalize-space(text())='Done']]]",
      mobileHeaderButton:
        "//div[@class='flex mobile-header-content-container']/button",
    },
    labels: {
      userTagName: "User Name",
      sideBurguerMenu: "Page side burguer menu",
      acceptCookiesButton: "Accept All Cookies button",
      nextButton: "Next button",
      doneButton: "Done button",
    },
  };
}
