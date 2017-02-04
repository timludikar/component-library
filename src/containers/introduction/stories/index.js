import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Introduction from '../index';

storiesOf('container.Introduction', module)
  .add('default view', () => {
    const tagLine = {
      primary: 'Holds a unique mix of high-level systems engineering and hands-on experience managing engineering teams, for the development and delivery of  software and hardware based products.',
      secondary: 'A forward thinking services team manager who played a key role in the development of one of Deloitte’s Canadian Tech- nology Fast 50 Company’s by using 5+ years of software engineering and project management experience. An impressive  problem solver with strong presentation skills, and a proven track record of dependable technical leadership and management.',
    };

    const proCompt = [
      'International project experience as a chairman of a global engineering committee.',
      'Excels in a fast-paced and  exible work environments.',
      'Ability to wear many hats in a single organization – from a problem-solving engineer to  a customer-facing marketer.',
      'Can manage simultaneous time-sensitive projects with numerous stakeholders.',
    ];

    return (
      <Introduction
        title="Technical Architect"
        tagLine={tagLine}
        competencies={proCompt}
      />
    );
  });
