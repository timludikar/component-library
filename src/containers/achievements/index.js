import React from 'react';

import Base from '../_base';
import Header from '../../components/header';
import Article from '../../components/article';
import { UnorderedList, ListItem } from '../../components/lists';

import styles from './stylesheet/achievements.styl';

const Achievements = ({
  achievements = [
    { company: '',
      achievements: [],
    },
  ],
}) => {
  const achievementList = (achievement, i) => (
    <Article key={i}>
      <Header size={3}>{achievement.company}</Header>
      <UnorderedList>
        { achievement.achievements.map((list, j) => {
          return <ListItem key={j}>{list}</ListItem>;
        })}
      </UnorderedList>
    </Article>
  );

  return (
    <Base title="Achievements" className={styles.achievements}>
      { achievements.map(achievementList) }
    </Base>
  );
};

Achievements.propTypes = {
  achievements: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      company: React.PropTypes.string,
      achievements: React.PropTypes.array,
    })
  ),
};

export default Achievements;
