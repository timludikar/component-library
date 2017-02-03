import React from 'react';

import ListItem from './listitem';
import styles from './stylesheet/lists.styl';

const UnorderedList = ({ children, style = {} }) => (
  <ul
    className={styles.ul}
    style={{ ...style }}
  >
    {children}
  </ul>
);

UnorderedList.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(ListItem),
    React.PropTypes.arrayOf(ListItem),
  ]).isRequired,
  style: React.PropTypes.object,
};

export default UnorderedList;
