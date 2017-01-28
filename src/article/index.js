import React from 'react';
import styles from './stylesheet/article.styl';

const Article = ({ children, style = {} }) => (
  <article
    className={styles.article}
    style={{ ...style }}
  >
    {children}
  </article>
);

Article.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
};

export default Article;
