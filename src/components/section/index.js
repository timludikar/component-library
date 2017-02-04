import React from 'react';

const Section = ({ children, style = {}, className }) => {
  const cssClass = `${className}`;

  return (
    <section
      className={cssClass}
      style={{ ...style }}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
};

export default Section;
