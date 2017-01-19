import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from '../index';

const { describe, it } = global;

describe('Header', () => {
  it('should show a default size', () => {
    const wrapper = shallow(<Header>Hello</Header>);
    expect(wrapper.html()).to.be.equal('<h1>Hello</h1>');
  });

  it('should show the given size', () => {
    const size = 2;
    const wrapper = shallow(<Header size={size}>Hello</Header>);
    expect(wrapper.html()).to.be.equal('<h2>Hello</h2>');
  });

  it('should show the given text', () => {
    const text = 'Test Text';
    const wrapper = shallow(<Header>{text}</Header>);
    expect(wrapper.text()).to.be.equal(text);
  });
});
