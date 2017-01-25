import React from 'react';

const asideStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
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
