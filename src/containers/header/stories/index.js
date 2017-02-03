import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TopHeader from '../index';

storiesOf('container.TopHeader', module)
  .add('default view', () => (
    <TopHeader />
  ));
