import React from 'react';

const ListItem = ({ children, style = {} }) => (
  <li
    style={{ ...style }}
  >
    {children}
  </li>
);

ListItem.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
};

export default ListItem;
