import React from 'react';

import Header from '../../components/header';
import Section from '../../components/section';
import Article from '../../components/article';
import Paragraph from '../../components/paragraph';
import Aside from '../../components/aside';
import Main from '../../components/main';
import { UnorderedList, ListItem } from '../../components/lists';
import { Employment } from '../../models';

import styles from './stylesheet/experience.styl';

const employmentView = (employment, i) => {
  return (
    <Article key={i}>
      <Aside>
        <Header size={3}>{employment.company}</Header>
        <Paragraph>{employment.city}, {employment.country}</Paragraph>
        <Paragraph>{employment.date}</Paragraph>
      </Aside>
      <Main>
        <Header size={4}>{employment.title}</Header>
        <UnorderedList>
        { employment.experiences.map((item, id) => {
          return (
            <ListItem>{item}</ListItem>
          )
        })}
        </UnorderedList>
      </Main>
    </Article>
  );
};

const Experience = ({
  title,
  children
}) => {
  let renderMethod;
  if(children[0].getClassName() == "Employment") renderMethod = employmentView;

  return (
    <Section className={styles.experience}>
      <Header size={2} className={[styles.zigzag]}>{title}</Header>
      { children.map( renderMethod )}
    </Section>
  );
};

Experience.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.arrayOf(Employment),
};

export default Experience;
