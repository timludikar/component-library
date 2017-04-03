import React from 'react';

import Base from '../_base';
import Header from '../../components/header';
import Article from '../../components/article';
import Paragraph from '../../components/paragraph';
import Aside from '../../components/aside';
import Main from '../../components/main';
import { UnorderedList, ListItem } from '../../components/lists';

import styles from './stylesheet/experience.styl';

const listView = (item, id) => (
  <ListItem key={id}>{item}</ListItem>
);

const asideView = (title, date, description, cssClass = '') => (
  <Aside className={cssClass}>
    <Header size={3}>{title}</Header>
    <Paragraph>{date}</Paragraph>
    <Paragraph>{description}</Paragraph>
  </Aside>
);

const employmentView = (employment, i) => {
  const { title, date, city, country } = employment;
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
  const { title, date, name } = organization;
  return (
    <Article key={i}>
      { asideView(title, date, name) }
      <Main>
        <UnorderedList>
          { organization.experiences.map(listView) }
        </UnorderedList>
      </Main>
    </Article>
  );
};

const certificationView = (certification, i) => {
  const { title, date, organization } = certification;
  return (
    <Article key={i}>
      { asideView(organization, date, title, styles.nocolumn) }
    </Article>
  );
};

const viewOptions = {
  certificationView,
  employmentView,
  organizationView,
};

const Experience = ({
  title,
  children,
}) => {
  const renderMethod = () => (`${children[0].getClassName().toLowerCase()}View`);

  try {
    return (
      <Base title={title} className={styles.experience}>
        { children.map(viewOptions[renderMethod()]) }
      </Base>
    );
  } catch (e) {
    throw new Error('Experience view does not exist.');
  }
};

Experience.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Experience;
