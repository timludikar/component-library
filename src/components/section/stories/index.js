import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Section from '../index';

storiesOf('component.Section', module)
  .add('default view', () => (
    <Section>Hello</Section>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Section style={style}>Hello</Section>
    );
  });
