import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Achievements from '../index';

storiesOf('container.Achievements', module)
  .add('default view', () => {
    const fullstack = {
      company: 'Full Stack Toronto',
      achievements: [
        'Co-founder of Toronto’s first Full Stack, non-profit, developer community.',
        'Hosted the  rst Full Stack Conference in November 2014 in Toronto.',
        'On track to doubling sponsorship contributions for 2015.',
      ],
    };
    const softgravity = {
      company: 'Soft Gravity',
      achievements: [
        'Built a front-end development team from the ground up.',
        'Successfully delivered 2, $100k development projects in 4 months.',
        'Started the company’s first R&D Department.',
      ],
    };
    const achievements = [fullstack, softgravity];
    return (
      <Achievements achievements={achievements} />
    );
  });
