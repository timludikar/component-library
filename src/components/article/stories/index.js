import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Article from '../index';

storiesOf('component.Article', module)
  .add('default view', () => (
    <Article>Hello</Article>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Article style={style}>Hello</Article>
    );
  });
