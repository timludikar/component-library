import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Paragraph from '../index';

storiesOf('component.Paragraph', module)
  .add('default view', () => (
    <Paragraph>Hello</Paragraph>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Paragraph style={style}>Hello</Paragraph>
    );
  });
