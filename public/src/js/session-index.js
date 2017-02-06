'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _sessionContainer = require('./sessionContainer');

var _sessionContainer2 = _interopRequireDefault(_sessionContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
	_reactDom2.default.render(_react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_header2.default, { type: '1', val: 'Native WebRTC with signalling', className: 'text-center' })
	), document.getElementById('header'));
	_reactDom2.default.render(_react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_sessionContainer2.default, null)
	), document.getElementById('root'));
}
