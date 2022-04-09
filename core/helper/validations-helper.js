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

  static getFieldTextEqualsToValidation(fieldLabel, value) {
    return `${this.types.field} ${fieldLabel} should have text equals to ${value}`;
  }
}
