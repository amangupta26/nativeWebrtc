'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _videoContainer = require('./videoContainer');

var _videoContainer2 = _interopRequireDefault(_videoContainer);

var _firstComponent = require('./firstComponent');

var _firstComponent2 = _interopRequireDefault(_firstComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
	_reactDom2.default.render(_react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_firstComponent2.default, null),
		' ',
		_react2.default.createElement(_videoContainer2.default, { id: 'local' })
	), document.getElementById('root'), getMedia());
}

function getMedia() {
	var constraints = {
		'audio': false,
		'video': true
	};

	var successMethod = function successMethod(stream) {
		var ele = document.getElementById('vid_local');
		ele.autoplay = true;
		ele.srcObject = stream;
	};

	var failureMethod = function failureMethod(err) {
		console.log("Error in gUM " + err);
	};

	navigator.mediaDevices.getUserMedia(constraints).then(successMethod, failureMethod);
};
