import React from 'react';

import Base from '../_base';
import { UnorderedList, ListItem } from '../../components/lists';

import styles from './stylesheet/skills.styl';

const Skills = ({
  title,
  skills = [],
  bulleted = true,
}) => {
  const list = skills.map((skill, i) => <ListItem key={i}>{skill}</ListItem>);

  return (
    <Base title={title} className={styles.skills}>
      <UnorderedList style={bulleted ? ' ' : { 'list-style-type': 'none' }}>
        {list}
      </UnorderedList>
    </Base>
  );
};

Skills.propTypes = {
  title: React.PropTypes.string.isRequired,
  skills: React.PropTypes.array.isRequired,
  bulleted: React.PropTypes.bool,
};

export default Skills;
