import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Introduction from '../index';

const { describe, it } = global;

describe('Introduction', () => {
  it('should have title and primary tagline.', () => {
    const title = 'This is a Title';
    const tagLine = {
      primary: 'This is a primary tagline',
      secondary: 'This is a secondary tagline',
    };
    const wrapper = mount(<Introduction title={title} tagLine={tagLine} />);

    expect(wrapper.find('h2').text()).to.be.equal(title);
    expect(wrapper.find('p').at(0).text()).to.be.equal(tagLine.primary);
    expect(wrapper.find('p').at(1).text()).to.be.equal(tagLine.secondary);
  });

  it('should accept array of competencies.', () => {
    const title = 'This is a Title';
    const tagLine = {
      primary: 'This is a primary tagline',
    };
    const competencies = [
      'Competency 1',
      'Competency 2',
      'Competency 3',
    ];

    const wrapper = mount(<Introduction
      title={title}
      tagLine={tagLine}
      competencies={competencies}
    />);

    expect(wrapper.find('li').at(0).text()).to.be.equal(competencies[0]);
    expect(wrapper.find('li').at(1).text()).to.be.equal(competencies[1]);
    expect(wrapper.find('li').at(2).text()).to.be.equal(competencies[2]);
  });
});
