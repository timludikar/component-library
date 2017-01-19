'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 1 : _ref$size;

  var Tag = 'h' + size;
  return (0, _react.createElement)(Tag, {
    style: (0, _extends3.default)({}, style), className: className ? '' + className.join(' ') : null, children: children
  });
};

Header.propTypes = {
  className: _react2.default.PropTypes.array,
  size: _react2.default.PropTypes.number,
  children: _react2.default.PropTypes.string.isRequired,
  style: _react2.default.PropTypes.object
};

exports.default = Header;