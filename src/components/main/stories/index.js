import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Main from '../index';

storiesOf('component.Main', module)
  .add('default view', () => (
    <Main>Hello</Main>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Main style={style}>Hello</Main>
    );
  });
