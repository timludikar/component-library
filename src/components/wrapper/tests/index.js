import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Wrapper from '../index';

const { describe, it } = global;

describe('Wrapper', () => {
  it('should show the given text', () => {
    const text = 'The Text';
    const wrapper = shallow(<Wrapper>{text}</Wrapper>);
    expect(wrapper.text()).to.be.equal(text);
  });
});
