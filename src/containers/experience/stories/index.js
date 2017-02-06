import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Wrapper from '../../../components/wrapper';
import Experience from '../index';

storiesOf('container.Experience', module)
  .add('bulleted view', () => {
    const title = "Employment Experience";
    const nurun = {
      company: "Nurun Inc",
      description: "Toronto, Canada<br />2014 - Present",
      title: "Senior Interface Developer",
      experience: [
        "Senior full stack developer on the Walmart Canada - Search and Browse project.",
        "Architect of performance-driven front-end development.",
        "Interface between front-end and back-end development teams.",
      ]
    };

    return (
      <Wrapper>
        <Experience title={title} experiences={[nurun]}/>
      </Wrapper>
    );
  });
