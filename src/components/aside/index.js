import React from 'react';

const asideStyles = {
};

const Aside = ({ children, style = {} }) => (
  <aside
    style={{ ...asideStyles, ...style }}
  >
    {children}
  </aside>
);

Aside.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
};

export default Aside;
