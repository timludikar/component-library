import React from 'react';

import ListItem from './listitem';
import styles from './stylesheet/lists.styl';

const OrderedList = ({ children, style = {} }) => (
  <ol
    className={styles.ol}
    style={{ ...style }}
  >
    {children}
  </ol>
);

OrderedList.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(ListItem),
    React.PropTypes.arrayOf(ListItem),
  ]).isRequired,
  style: React.PropTypes.object,
};

export default OrderedList;
