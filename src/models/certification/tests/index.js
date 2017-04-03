import { expect } from 'chai';
import Certification from '../index';

const { describe, it } = global;

const organization = 'Company 1';
const start = '2014';
const end = 'Present';
const title = 'Senior Interface Developer';

describe('Certification Model', () => {
  it('accepts company, city, country, start, end, title, experiences', () => {
    const certificationRecord = new Certification(
      organization,
      title,
      start,
      end,
    );

    expect(certificationRecord.title).to.be.equal(title);
    expect(certificationRecord.organization).to.be.equal(organization);
    expect(certificationRecord.date).to.be.equal(`${start} - ${end}`);
  });

  it('produces a time range for employment', () => {
    const certificationRecord = new Certification(
      organization,
      title,
      start,
      2015,
    );

    expect(certificationRecord.title).to.be.equal(title);
    expect(certificationRecord.organization).to.be.equal(organization);
    expect(certificationRecord.date).to.be.equal(`${start} - 2015`);
  });
});
