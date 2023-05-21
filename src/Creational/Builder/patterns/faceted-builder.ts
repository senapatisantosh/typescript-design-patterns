interface IPerson {
  name: string;
  passport: string;
  // address details
  city: string;
  pin: number;

  //Employment details
  positon: string;
  company: string;
}

class FacetedBuilder {
  protected person!: IPerson;

  public demographics = new FacetedDemographicsBuilder(this.person);
  public job = new FacetedJobBuilder(this.person);

  build() {
    return this.person;
  }
}

class FacetedDemographicsBuilder extends FacetedBuilder {
  constructor(person: IPerson) {
    super();
    this.person = person;
  }
  called(name: string): FacetedDemographicsBuilder {
    this.person.name = name;
    return this;
  }
  passportNumber(passport: string): FacetedDemographicsBuilder {
    this.person.passport = passport;
    return this;
  }
  situated(city: string): FacetedDemographicsBuilder {
    this.person.city = city;
    return this;
  }
  at(pin: number): FacetedDemographicsBuilder {
    this.person.pin = pin;
    return this;
  }
}

class FacetedJobBuilder extends FacetedBuilder {
  constructor(person: IPerson) {
    super();
    this.person = person;
  }
  company(company: string): FacetedJobBuilder {
    this.person.company = company;
    return this;
  }
  positon(positon: string): FacetedJobBuilder {
    this.person.positon = positon;
    return this;
  }
}

const facetedBuilderObj = new FacetedBuilder().demographics
  .called('Santosh')
  .passportNumber('N350232')
  .situated('Bangalore')
  .at(560073)
  .job.company('Koch')
  .positon('Technical Lead')
  .build();

console.log(facetedBuilderObj);
