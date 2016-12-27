'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _firstPageContainer = require('./firstPageContainer');

var _firstPageContainer2 = _interopRequireDefault(_firstPageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ToolBarComponent from "./toolBar"


// import VideoContainerComponent from "./videoContainer"
if (typeof window !== 'undefined') {
	_reactDom2.default.render(_react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_header2.default, null)
	), document.getElementById('header'));
	_reactDom2.default.render(_react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_firstPageContainer2.default, null)
	), document.getElementById('root'));
}
