/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getClassName"] }] */

export default class Certification {
  constructor(title, organization, start, end) {
    this.organization = organization;
    this.title = title;
    this.date = `${start} - ${end}`;
  }
  getClassName() {
    return Certification.name;
  }
}
