import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Main from '../index';

const { describe, it } = global;

describe('Main', () => {
  it('should show the given text', () => {
    const text = 'The Text';
    const wrapper = shallow(<Main>{text}</Main>);
    expect(wrapper.text()).to.be.equal(text);
  });
});
