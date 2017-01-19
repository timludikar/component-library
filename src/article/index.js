import React from 'react';

const articleStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
};

const Article = ({ children, style = {} }) => (
  <article
    style={{ ...articleStyles, ...style }}
  >
    {children}
  </article>
);

Article.propTypes = {
  children: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
};

export default Article;
