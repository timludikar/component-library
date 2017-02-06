import React from 'react';

const asideStyles = {
};

const Main = ({ children, style = {} }) => (
  <main
    style={{ ...asideStyles, ...style }}
  >
    {children}
  </main>
);

Main.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
};

export default Main;
