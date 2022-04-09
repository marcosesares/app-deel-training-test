export class ValidationsHelper {
  static get types() {
    return {
      field: "Field",
      dropDown: "Drop down",
      page: "Page",
      button: "Button",
      label: "Label",
      image: "Image",
      window: "Window",
      notification: "Notification",
      grid: "Grid",
      alert: "Alert",
      menu: "Menu",
      link: "Link",
    };
  }

  static getFieldTextContainsValidation(fieldLabel, value) {
    return `${this.types.field} ${fieldLabel} text should contain ${value}`;
  }

  static getFieldTextEqualsToValidation(fieldLabel, value) {
    return `${this.types.field} ${fieldLabel} should have text equals to ${value}`;
  }

  static getClickAction(name) {
    return `Click the '${name}'`;
  }

  static getSetValueAction(name, text) {
    return `Type the '${text}' on the '${name}'`;
  }

  static getDisplayedValidation(name) {
    return `'${name}' should be displayed`;
  }
}
