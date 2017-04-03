import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BaseContainer from '../index';

storiesOf('container.BaseContainer', module)
  .add('default view', () => {
    return (
      <BaseContainer title="Base Container">TEST</BaseContainer>
    );
  });
