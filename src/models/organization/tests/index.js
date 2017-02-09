import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Organization from '../index';

const { describe, it } = global;

const company = "Company 1";
const city = "Toronto";
const country = "Canada";
const start = "2014";
const end = "Present";
const title = "Senior Interface Developer";
const experiences = [
  "Experience 1",
  "Experience 2",
  "Experience 3"
];

describe('Organization Model', () => {
  it('accepts company, city, country, start, end, title, experiences', () => {
    const employmentRecord = new Organization(
      company,
      city,
      country,
      start,
      end,
      title,
      experiences,
    );

    expect(employmentRecord.title).to.be.equal(title);
    expect(employmentRecord.company).to.be.equal(company);
    expect(employmentRecord.country).to.be.equal(country);
    expect(employmentRecord.experiences).to.be.equal(experiences);
    expect(employmentRecord.date).to.be.equal(`${start} - ${end}`);
  });

  it('produces a time range for employment', () => {
    const employmentRecord = new Organization(
      company,
      city,
      country,
      start,
      2015,
      title,
      experiences,
    );

    expect(employmentRecord.title).to.be.equal(title);
    expect(employmentRecord.company).to.be.equal(company);
    expect(employmentRecord.country).to.be.equal(country);
    expect(employmentRecord.experiences).to.be.equal(experiences);
    expect(employmentRecord.date).to.be.equal(`${start} - 2015`);
  })

});
