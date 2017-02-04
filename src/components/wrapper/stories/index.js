import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Wrapper from '../index';

storiesOf('component.Wrapper', module)
  .add('default view', () => (
    <Wrapper>Hello</Wrapper>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Wrapper style={style}>Hello</Wrapper>
    );
  });
