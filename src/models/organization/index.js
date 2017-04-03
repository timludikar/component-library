/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getClassName"] }] */

export default class Organization {
  constructor(title, name, start, end, experiences) {
    this.name = name;
    this.title = title;
    this.date = `${start} - ${end}`;
    this.experiences = experiences || [];
  }
  getClassName() {
    return Organization.name;
  }
}
