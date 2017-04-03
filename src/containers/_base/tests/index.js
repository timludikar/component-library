import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Achievements from '../index';

const { describe, it } = global;

describe('Achievements', () => {
  it('should render with an Achievement object.', () => {
    const fullstack = {
      company: 'Full Stack Toronto',
      achievements: [
        'Co-founder of Toronto’s first Full Stack, non-profit, developer community.',
        'Hosted the  rst Full Stack Conference in November 2014 in Toronto.',
        'On track to doubling sponsorship contributions for 2015.',
      ],
    };
    const wrapper = mount(<Achievements achievements={[fullstack]} />);

    expect(wrapper.find('h2').text()).to.be.equal('Achievements');
    expect(wrapper.find('h3').text()).to.be.equal('Full Stack Toronto');
    expect(wrapper.find('li').at(0).text()).to.be.equal('Co-founder of Toronto’s first Full Stack, non-profit, developer community.');
    expect(wrapper.find('li').at(1).text()).to.be.equal('Hosted the  rst Full Stack Conference in November 2014 in Toronto.');
    expect(wrapper.find('li').at(2).text()).to.be.equal('On track to doubling sponsorship contributions for 2015.');
  });
});
