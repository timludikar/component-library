import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Article from '../index';

const { describe, it } = global;

describe('Article', () => {
  it('should show the given text', () => {
    const text = 'The Text';
    const wrapper = shallow(<Article>{text}</Article>);
    expect(wrapper.text()).to.be.equal(text);
  });
});
