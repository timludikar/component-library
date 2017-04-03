import React from 'react';

import Header from '../../components/header';
import Section from '../../components/section';

import styles from './stylesheet/_base.styl';

const BaseContainer = ({
  title,
  className,
  children,
}) => (
  <Section title={title} className={className}>
    <Header size={2} className={[styles.zigzag]}>{title}</Header>
    {children}
  </Section>
);

BaseContainer.propTypes = {
  title: React.PropTypes.string,
  className: React.PropTypes.node,
  children: React.PropTypes.node.isRequired,
};

export default BaseContainer;
