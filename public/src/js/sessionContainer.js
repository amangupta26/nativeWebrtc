'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _videoContainer = require('./videoContainer');

var _videoContainer2 = _interopRequireDefault(_videoContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SessionPageMain = function (_React$Component) {
	_inherits(SessionPageMain, _React$Component);

	function SessionPageMain() {
		_classCallCheck(this, SessionPageMain);

		var _this = _possibleConstructorReturn(this, (SessionPageMain.__proto__ || Object.getPrototypeOf(SessionPageMain)).call(this));

		_this.state = {
			'hasStarted': false,
			'hasMedia': false,
			'hasJoined': false,
			'localStream': null,
			'remoteStreams': {},
			'localRPC': null,
			'remoteRPC': {}
		};
		return _this;
	}

	_createClass(SessionPageMain, [{
		key: 'getMedia',
		value: function getMedia() {
			var mainThis = this;
			var constraints = {
				'audio': true,
				'video': true
			};

			var successMethod = function successMethod(stream) {
				mainThis.setState({
					'hasStarted': true,
					'localStream': stream
				});
				var ele = document.getElementById('vid_local');
				ele.autoplay = true;
				ele.muted = true;
				ele.srcObject = stream;
			};

			var failureMethod = function failureMethod(err) {
				console.log("Error in gUM " + err);
			};

			navigator.getUserMedia(constraints, successMethod, failureMethod);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var divStyle = {
				'border': '2px solid black'
			};

			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'col-md-3', style: divStyle },
					_react2.default.createElement(_header2.default, { type: '2', val: 'Me' }),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(_toolbar2.default, { val: 'Start', onClick: function onClick() {
								return _this2.getMedia();
							} }),
						_react2.default.createElement(_toolbar2.default, { val: 'Hang up' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(_videoContainer2.default, { id: 'local', className: 'col-md-12' })
					)
				),
				_react2.default.createElement('div', { className: 'col-md-9', style: divStyle })
			);
		}
	}]);

	return SessionPageMain;
}(_react2.default.Component);

exports.default = SessionPageMain;
