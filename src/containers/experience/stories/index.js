import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Wrapper from '../../../components/wrapper';
import Experience from '../index';
import { Employment } from '../../../models';

storiesOf('container.Experience', module)
  .add('bulleted view', () => {
    const title = "Employment Experience";
    const nurun = new Employment("Nurun Inc", "Toronto" ,"Canada", "2014", "Present", "Senior Interface Developer", [
      "Senior full stack developer on the Walmart Canada - Search and Browse project.",
      "Architect of performance-driven front-end development.",
      "Interface between front-end and back-end development teams.",
    ]);

    return (
      <Wrapper>
        <Experience title={title}>{[nurun]}</Experience>
      </Wrapper>
    );
  });
