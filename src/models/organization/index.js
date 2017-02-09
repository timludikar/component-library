export default class Organization {
  constructor(title, organization, start, end, experiences) {
    this.organization = organization;
    this.title = title;
    this.date = `${start} - ${end}`;
    this.experiences = experiences || [];
  }
  get description(){
    this.experiences;
  }
  set description(props){
    this.experiences = props || [];
  }
  getClassName() {
    return Organization.name;
  }
}
