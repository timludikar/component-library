import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Paragraph from '../index';

const { describe, it } = global;

describe('Paragraph', () => {
  it('should show the given text', () => {
    const text = 'The Text';
    const wrapper = shallow(<Paragraph>{text}</Paragraph>);
    expect(wrapper.text()).to.be.equal(text);
  });

  it('should not allow other React elements', () => {
    const reactElement = React.createElement('h1');
    const wrapper = shallow(<Paragraph>{reactElement}</Paragraph>);
    expect(wrapper.text()).to.not.equal(Error);
  });
});
