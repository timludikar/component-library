import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Experience from '../index';

const { describe, it } = global;

describe('Experience', () => {
  it('should be hard coded', () => {
    const wrapper = render(<Experience />);
    expect(wrapper.html()).to.be.equal('<header role="banner"><h1 class=""><b>Tim</b> Ludikar</h1></header>');
  });
});
