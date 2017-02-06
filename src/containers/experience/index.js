import React from 'react';

import Header from '../../components/header';
import Section from '../../components/section';
import Article from '../../components/article';
import Paragraph from '../../components/paragraph';
import Aside from '../../components/aside';
import Main from '../../components/main';
import { UnorderedList, ListItem } from '../../components/lists';

import styles from './stylesheet/experience.styl';

const Experience = ({
  title,
  experiences = [{
    company: "",
    description: "",
    title: "",
    experience: [
      "",
      "",
      "",
    ]
  }]
}) => {

  return (
    <Section className={styles.experience}>
      <Header size={2} className={[styles.zigzag]}>{title}</Header>
      { experiences.map((experience, i) => {
        return (
          <Article key={i}>
            <Aside>
              <Header size={3}>{experience.company}</Header>
              <Paragraph>{experience.description}</Paragraph>
            </Aside>
            <Main>
              <Header size={4}>{experience.title}</Header>
              <UnorderedList>
              { experience.experience.map((item, id) => {
                return (
                  <ListItem>{item}</ListItem>
                )
              })}
              </UnorderedList>
            </Main>
          </Article>
        )
      })}
    </Section>
  );
};

Experience.propTypes = {
  title: React.PropTypes.string.isRequired,
  experiences: React.PropTypes.array,
};

export default Experience;
