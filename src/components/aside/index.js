import React from 'react';

const asideStyles = {
};

const Aside = ({ children, style = {}, className }) => {
  const cssClass = `${className}`;

  return (
    <aside
      style={{ ...asideStyles, ...style }}
      className={cssClass}
    >
      {children}
    </aside>
  );
};

Aside.propTypes = {
  className: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
};

export default Aside;
