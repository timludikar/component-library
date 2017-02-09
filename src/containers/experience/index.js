import React from 'react';

import Header from '../../components/header';
import Section from '../../components/section';
import Article from '../../components/article';
import Paragraph from '../../components/paragraph';
import Aside from '../../components/aside';
import Main from '../../components/main';
import { UnorderedList, ListItem } from '../../components/lists';
import { Employment, Organization } from '../../models';

import styles from './stylesheet/experience.styl';

const listView = (item, id) => (
  <ListItem>{item}</ListItem>
);

const asideView = (title, date, description, cssClass = "") => (
  <Aside className={cssClass}>
    <Header size={3}>{title}</Header>
    <Paragraph>{date}</Paragraph>
    <Paragraph>{description}</Paragraph>
  </Aside>
);

const employmentView = (employment, i) => {
  let { title, date, city, country } = employment;
  return (
    <Article key={i}>
      { asideView(title, date, `${city}, ${country}`) }
      <Main>
        <Header size={4}>{employment.title}</Header>
        <UnorderedList>
          { employment.experiences.map(listView) }
        </UnorderedList>
      </Main>
    </Article>
  );
};

const organizationView = (organization, i) => {
  let { title, date, description } = organization;
  return (
    <Article key={i}>
      { asideView(title, date, description) }
      <Main>
        <UnorderedList>
          { organization.experiences.map(listView) }
        </UnorderedList>
      </Main>
    </Article>
  );
};

const certificationView = (certification, i) => {
  let { title, date, organization } = certification;
  return (
    <Article key={i}>
      { asideView(organization, date, title, styles.nocolumn) }
    </Article>
  );
};

const Experience = ({
  title,
  children
}) => {
  let renderMethod;

  console.log(styles);
  if(children[0].getClassName() == "Employment") renderMethod = employmentView;
  else if (children[0].getClassName() == "Organization") renderMethod = organizationView;
  else if (children[0].getClassName() == "Certification") renderMethod = certificationView;

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
