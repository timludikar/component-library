import React from 'react';

const paragraphStyles = {};

const Paragraph = ({ children, style = {} }) => (
  <p
    style={{ ...paragraphStyles, ...style }}
  >
    {children}
  </p>
);

Paragraph.propTypes = {
  children: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
};

export default Paragraph;
