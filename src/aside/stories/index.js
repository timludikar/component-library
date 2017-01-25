import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Aside from '../index';

storiesOf('Aside', module)
  .add('default view', () => (
    <Aside>Hello</Aside>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Aside style={style}>Hello</Aside>
    );
  });
