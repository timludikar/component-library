import React from 'react';

import styles from './stylesheet/wrapper.styl';

const Wrapper = ({ children, className }) => {
  const cssClass = `${styles[className]} ${styles.wrapper}`;

  return (
    <div
      className={cssClass}
    >
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default Wrapper;
