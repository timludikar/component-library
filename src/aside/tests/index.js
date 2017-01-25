import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Aside from '../index';

const { describe, it } = global;

describe('Aside', () => {
  it('should show the given text', () => {
    const text = 'The Text';
    const wrapper = shallow(<Aside>{text}</Aside>);
    expect(wrapper.text()).to.be.equal(text);
  });
});
