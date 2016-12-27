'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _videoContainer = require('./videoContainer');

var _videoContainer2 = _interopRequireDefault(_videoContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FirstPageContainer = function (_React$Component) {
	_inherits(FirstPageContainer, _React$Component);

	function FirstPageContainer() {
		_classCallCheck(this, FirstPageContainer);

		var _this = _possibleConstructorReturn(this, (FirstPageContainer.__proto__ || Object.getPrototypeOf(FirstPageContainer)).call(this));

		_this.state = {
			'hasStarted': false,
			'hasCalled': false,
			'hasStopped': false
		};
		return _this;
	}

	_createClass(FirstPageContainer, [{
		key: 'getMedia',
		value: function getMedia() {
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
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(_toolbar2.default, { val: 'Start', onClick: function onClick() {
							return _this2.getMedia();
						} }),
					_react2.default.createElement(_toolbar2.default, { val: 'Call' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(_videoContainer2.default, { id: 'local' }),
					_react2.default.createElement(_videoContainer2.default, { id: 'remote' })
				)
			);
		}
	}]);

	return FirstPageContainer;
}(_react2.default.Component);

exports.default = FirstPageContainer;
