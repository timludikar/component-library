export default class Employment {
  constructor(company, city, country, start, end, title, experiences) {
    this.company = company;
    this.city = city;
    this.country = country;
    this.date = `${start} - ${end}`;
    this.title = title;
    this.experiences = experiences;
  }
  getClassName() {
    return Employment.name;
  }
}
