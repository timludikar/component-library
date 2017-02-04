import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Wrapper from '../../../components/wrapper';
import Skills from '../index';

storiesOf('container.Skills', module)
  .add('bulleted view', () => {
    const title = 'Summary of personal skills';
    const skills = [
      'Organized, exible, and dependable.',
      'Excellent problem solver and programmer.',
      'Works well as an individual and in a team.',
      'Self-motivated and pro-active.',
      'Great in high-pressure situations.',
      'Well spoken.',
      'Self-starter.',
    ];
    return (
      <Skills title={title} skills={skills} />
    );
  })
  .add('non-bulleted view', () => {
    const title = 'Education';
    const skills = [
      'Bachelors Degree in Engineering Systems and Computing (BEng)',
      '2003 - 2009 University of Guelph, Guelph, Ontario',
    ];
    return (
      <Skills title={title} skills={skills} bulleted={false} />
    );
  })
  .add('1/2 view', () => {
    const title = 'Summary of Personal Skills';
    const skills = [
      'Organized, exible, and dependable.',
      'Excellent problem solver and programmer.',
      'Works well as an individual and in a team.',
      'Self-motivated and pro-active.',
      'Great in high-pressure situations.',
      'Well spoken.',
    ];
    return (
      <Skills title={title} skills={skills} className="col2" />
    );
  })
  .add('1/3 view', () => {
    const title = 'Summary of Personal Skills';
    const skills = [
      'Organized, exible, and dependable.',
      'Excellent problem solver and programmer.',
      'Works well as an individual and in a team.',
      'Self-motivated and pro-active.',
      'Great in high-pressure situations.',
      'Well spoken.',
    ];
    return (
      <Skills title={title} skills={skills} className="col3" />
    );
  })
  .add('1/2 page', () => {
    const title = 'Summary of Personal Skills';
    const skills = [
      'Organized, exible, and dependable.',
      'Excellent problem solver and programmer.',
      'Works well as an individual and in a team.',
      'Self-motivated and pro-active.',
      'Great in high-pressure situations.',
      'Well spoken.',
    ];
    return (
      <Wrapper>
        <Skills title={title} skills={skills} className="halfpage" />
        <Skills title={title} skills={skills} className="halfpage" />
      </Wrapper>
    );
  })
  .add('1/3 page', () => {
    const title = 'Summary of Personal Skills';
    const skills = [
      'Organized, exible, and dependable.',
      'Excellent problem solver and programmer.',
      'Works well as an individual and in a team.',
      'Self-motivated and pro-active.',
      'Great in high-pressure situations.',
      'Well spoken.',
    ];
    return (
      <Skills title={title} skills={skills} className="thirdpage" />
    );
  });
