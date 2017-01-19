import React, { createElement } from 'react';

const Header = ({ className, children, style = {}, size = 1 }) => {
  const Tag = `h${size}`;
  return (createElement(Tag, {
    style: { ...style }, className: className ? `${className.join(' ')}` : null, children,
  }));
};

Header.propTypes = {
  className: React.PropTypes.array,
  size: React.PropTypes.number,
  children: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
};

export default Header;
