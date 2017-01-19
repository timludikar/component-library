'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px'
};

var Article = function Article(_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style;
  return _react2.default.createElement(
    'article',
    {
      style: (0, _extends3.default)({}, articleStyles, style)
    },
    children
  );
};

Article.propTypes = {
  children: _react2.default.PropTypes.string.isRequired,
  style: _react2.default.PropTypes.object
};

exports.default = Article;