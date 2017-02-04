import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Skills from '../index';

const { describe, it } = global;

describe('Skills', () => {
  it('should be hard coded', () => {
    const wrapper = render(<Skills />);
    expect(wrapper.html()).to.be.equal('<header role="banner"><h1 class=""><b>Tim</b> Ludikar</h1></header>');
  });
});
