'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

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
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'col-md-3' },
					_react2.default.createElement(_header2.default, { type: '2', val: 'Me' })
				),
				_react2.default.createElement('div', { className: 'col-md-9' })
			);
		}
	}]);

	return SessionPageMain;
}(_react2.default.Component);

exports.default = SessionPageMain;