import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { UnorderedList, OrderedList, ListItem } from '../index';

const { describe, it } = global;

describe('List', () => {
  describe('Unordered List', () => {
    it('should not allow for text', () => {
      const text = 'The Text';
      const wrapper = shallow(<UnorderedList>{text}</UnorderedList>);
      expect(wrapper.text()).to.not.equal();
    });

    it('should not allow other React elements', () => {
      const reactElement = React.createElement('h1');
      const wrapper = shallow(<UnorderedList>{reactElement}</UnorderedList>);
      expect(wrapper.text()).to.not.equal(Error);
    });

    it('should allow ListItem element', () => {
      const reactElement = <ListItem>Hello</ListItem>;
      const wrapper = shallow(<UnorderedList>{reactElement}</UnorderedList>);
      expect(wrapper.contains(reactElement)).to.be.equal(true);
    });

    it('should allow multiple ListItem elements', () => {
      const reactElement = [<ListItem key={1}>Hello</ListItem>, <ListItem key={2}>World</ListItem>];
      const wrapper = shallow(<UnorderedList>{reactElement}</UnorderedList>);
      expect(wrapper.contains(reactElement)).to.be.equal(true);
    });
  });

  describe('Ordered List', () => {
    it('should not allow for text', () => {
      const text = 'The Text';
      const wrapper = shallow(<OrderedList>{text}</OrderedList>);
      expect(wrapper.text()).to.not.equal();
    });

    it('should not allow other React elements', () => {
      const reactElement = React.createElement('h1');
      const wrapper = shallow(<OrderedList>{reactElement}</OrderedList>);
      expect(wrapper.text()).to.not.equal(Error);
    });

    it('should allow ListItem element', () => {
      const reactElement = <ListItem>Hello</ListItem>;
      const wrapper = shallow(<OrderedList>{reactElement}</OrderedList>);
      expect(wrapper.contains(reactElement)).to.be.equal(true);
    });

    it('should allow multiple ListItem elements', () => {
      const reactElement = [<ListItem key={1}>Hello</ListItem>, <ListItem key={2}>World</ListItem>];
      const wrapper = shallow(<OrderedList>{reactElement}</OrderedList>);
      expect(wrapper.contains(reactElement)).to.be.equal(true);
    });
  });
});
