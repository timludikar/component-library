import React from 'react';

// import { Section, Header, Paragraph, UnorderedList, ListItem } from '../../';
import Section from '../../components/section';
import Header from '../../components/header';
import Paragraph from '../../components/paragraph';
import { UnorderedList, ListItem } from '../../components/lists';

import styles from './stylesheet/intro.styl';

const Introduction = ({
  title,
  tagLine = { primary: '', secondary: '' },
  competencies = [],
}) => (
  <Section className={styles.intro}>
    <Header size={2}>{title}</Header>
    <Paragraph style={{ fontSize: 'large', textAlign: 'center' }}>{tagLine.primary}</Paragraph>
    { tagLine.secondary &&
      <Paragraph style={{ textAlign: 'justified' }}>{tagLine.secondary}</Paragraph>
    }
    <Header size={3}>Additional competencies include:</Header>
    <UnorderedList>
      { competencies.map((competency, i) => {
        return <ListItem key={i}>{competency}</ListItem>;
      }) }
    </UnorderedList>
  </Section>
);

Introduction.propTypes = {
  title: React.PropTypes.string,
  tagLine: React.PropTypes.object,
  competencies: React.PropTypes.array,
};

export default Introduction;
