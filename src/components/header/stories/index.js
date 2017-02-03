import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Header from '../index';

storiesOf('component.Heading', module)
  .add('H1', () => (
    <Header>Heading 1</Header>
  ))
  .add('H2', () => (
    <Header size={2}>Heading 2</Header>
  ))
  .add('H3', () => (
    <Header size={3}>Heading 3</Header>
  ))
  .add('H4', () => (
    <Header size={4}>Heading 4</Header>
  ))
  .add('H5', () => (
    <Header size={5}>Heading 5</Header>
  ))
  .add('H6', () => (
    <Header size={6}>Heading 6</Header>
  ));
