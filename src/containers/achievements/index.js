import React from 'react';

import Header from '../../components/header';
import Section from '../../components/section';
import Article from '../../components/article';
import { UnorderedList, ListItem } from '../../components/lists';

import styles from './stylesheet/achievements.styl';

const Achievements = ({
  achievements = [
    { company: '',
      achievements: [],
    },
  ],
}) => (
  <Section className={styles.achievements}>
    <Header size={2} className={[styles.zigzag]}>Achievements</Header>
    { achievements.map((achievement, i) => {
      return (
        <Article key={i}>
          <Header size={3}>{achievement.company}</Header>
          <UnorderedList>
            { achievement.achievements.map((list, j) => {
              return <ListItem key={j}>{list}</ListItem>;
            })}
          </UnorderedList>
        </Article>
      );
    })}
  </Section>
);

Achievements.propTypes = {
  achievements: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      company: React.PropTypes.string,
      achievements: React.PropTypes.array,
    })
  ),
};

export default Achievements;
