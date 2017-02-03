import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { OrderedList, UnorderedList, ListItem } from '../index';

storiesOf('component.Lists', module)
  .add('Unordered List', () => (
    <UnorderedList>
      <ListItem>Hello</ListItem>
      <ListItem>World</ListItem>
    </UnorderedList>
  )).add('Ordered List', () => (
    <OrderedList>
      <ListItem>Hello</ListItem>
      <ListItem>World</ListItem>
    </OrderedList>
));
