import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Section from '../index';

const { describe, it } = global;

describe('Section', () => {
  it('should show the given text', () => {
    const text = 'The Text';
    const wrapper = shallow(<Section>{text}</Section>);
    expect(wrapper.text()).to.be.equal(text);
  });
});
