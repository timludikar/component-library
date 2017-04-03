import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Wrapper from '../../../components/wrapper';
import Experience from '../index';
import { Employment, Organization, Certification } from '../../../models';

storiesOf('container.Experience', module)
  .add('Experience view', () => {
    const title = 'Employment Experience';
    const nurun = new Employment('Nurun Inc', 'Toronto', 'Canada', '2014', 'Present', 'Senior Interface Developer', [
      'Senior full stack developer on the Walmart Canada - Search and Browse project.',
      'Architect of performance-driven front-end development.',
      'Interface between front-end and back-end development teams.',
    ]);

    return (
      <Wrapper>
        <Experience title={title}>{[nurun]}</Experience>
      </Wrapper>
    );
  }).add('Organization view', () => {
    const title = 'Employment Experience';
    const iet = new Organization(
      'Young Professional Community Committee - Chair',
      'Institute of Engineering and  Technology (IET)',
      '2011', 'Present',
      [
        'Coordinate with the Board of Trustees to create policies and organize younger members.',
        'Orchestrated the committee restructuring to improve e ciency and communication.',
        'Oversee 6 international regions and over 5,000 Young Professionals.',
      ]
    );

    return (
      <Wrapper>
        <Experience title={title}>{[iet]}</Experience>
      </Wrapper>
    );
  }).add('Certification view', () => {
    const title = 'Professional Licensing';
    const iet = new Certification(
      'Professional Engineers of Ontario',
      'Registered Engineering Intern Training (EIT) Program',
      '2011', 'Present'
    );

    return (
      <Wrapper>
        <Experience title={title} className={'halfpage'}>{[iet]}</Experience>
      </Wrapper>
    );
  });
