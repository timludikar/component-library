import React from 'react';

const Article = ({ children, style = {} }) => (
  <article
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
