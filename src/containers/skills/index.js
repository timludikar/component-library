import React from 'react';

import Header from '../../components/header';
import Section from '../../components/section';
import { UnorderedList, ListItem } from '../../components/lists';

import styles from './stylesheet/skills.styl';

const Skills = ({
  title,
  skills = [],
  bulleted = true,
  className,
}) => {
  const list = skills.map((skill, i) => <ListItem key={i}>{skill}</ListItem>);
  const cssClass = `${styles[className]} ${styles.skills}`;

  return (
    <Section className={cssClass}>
      <Header size={2} className={[styles.zigzag]}>{title}</Header>
      <UnorderedList style={bulleted ? ' ' : { 'list-style-type': 'none' }}>
        {list}
      </UnorderedList>
    </Section>
  );
};

Skills.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  skills: React.PropTypes.array.isRequired,
  bulleted: React.PropTypes.boolean,
};

export default Skills;
