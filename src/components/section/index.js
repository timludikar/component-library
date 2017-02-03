import React from 'react';
import styles from './stylesheet/section.styl';

const Section = ({ children, style = {} }) => (
  <section
    className={styles.section}
    style={{ ...style }}
  >
    {children}
  </section>
);

Section.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
};

export default Section;
