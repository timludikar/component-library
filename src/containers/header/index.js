import React from 'react';

import Header from '../../components/header';
import styles from './stylesheet/header.styl';

const TopHeader = () => (
  <header className={styles.header} role="banner">
    <Header size={1} className={[styles.zigzag]}><b>Tim</b> Ludikar</Header>
  </header>
);

export default TopHeader;
