import React from 'react';

import { Section, Header, Paragraph, UnorderedList, ListItem } from '../../index';
import styles from './stylesheet/intro.styl';

const Introduction = ({
  title,
  tagLine = { primary: '', secondary: '' },
  competencies = [],
}) => (
  <Section className={styles.intro}>
    <Header size={2}>{title}</Header>
    <Paragraph style={{ fontSize: 'large', textAlign: 'center' }}>{tagLine.primary}</Paragraph>
    <Paragraph style={{ textAlign: 'justified' }}>{tagLine.secondary}</Paragraph>
    <Header size={3}>Additional competencies include:</Header>
    <UnorderedList>
      { competencies.map((competency) => {
        return <ListItem>{competency}</ListItem>;
      }) }
    </UnorderedList>
  </Section>
);

Introduction.propTypes = {
  title: React.PropTypes.string,
  tagLine: React.PropTypes.object,
  competencies: React.PropTypes.array.isRequired,
};

export default Introduction;
