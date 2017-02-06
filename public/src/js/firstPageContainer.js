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
			'hasStopped': false,
			'localStream': null,
			'remoteStream': null,
			'localPeerConnection': null,
			'remotePeerConnection': null
		};
		return _this;
	}

	_createClass(FirstPageContainer, [{
		key: 'getMedia',
		value: function getMedia() {
			var mainThis = this;
			var constraints = {
				'audio': false,
				'video': true
			};

			var successMethod = function successMethod(stream) {
				mainThis.setState({
					'hasStarted': true,
					'localStream': stream
				});
				var ele = document.getElementById('vid_local');
				ele.autoplay = true;
				ele.srcObject = stream;
			};

			var failureMethod = function failureMethod(err) {
				console.log("Error in gUM " + err);
			};

			navigator.getUserMedia(constraints, successMethod, failureMethod);
		}
	}, {
		key: 'callPeer',
		value: function callPeer() {
			var mainThis = this;
			var servers = null;
			var pc1 = new RTCPeerConnection(servers);
			var pc2 = new RTCPeerConnection(servers);

			pc1.onicecandidate = function (event) {
				if (event.candidate) pc2.addIceCandidate(new RTCIceCandidate(event.candidate));
			};

			pc2.onicecandidate = function (event) {
				if (event.candidate) pc1.addIceCandidate(new RTCIceCandidate(event.candidate));
			};

			pc2.onaddstream = function (event) {
				mainThis.setState({
					'remoteStream': event.stream,
					'hasCalled': true,
					'localPeerConnection': pc1,
					'remotePeerConnection': pc2
				});
				var ele = document.getElementById('vid_remote');
				ele.autoplay = true;
				ele.srcObject = event.stream;
			};
			pc1.addStream(this.state.localStream);

			var offerOptions = {
				offerToReceiveAudio: 1,
				offerToReceiveVideo: 1
			};
			pc1.createOffer(offerOptions).then(function (offerDesc) {
				pc1.setLocalDescription(offerDesc).then(function () {}, function (err) {
					console.log("err1 ", err);
				});
				pc2.setRemoteDescription(offerDesc).then(function () {}, function (err) {
					console.log("err2 ", err);
				});

				pc2.createAnswer().then(function (answerDesc) {
					pc2.setLocalDescription(answerDesc).then(function () {}, function (err) {
						console.log("err3 ", err);
					});
					pc1.setRemoteDescription(answerDesc).then(function () {}, function (err) {
						console.log("err4 ", err);
					});
				});
			});
		}
	}, {
		key: 'hangup',
		value: function hangup() {
			this.state.localPeerConnection.close();
			this.state.remotePeerConnection.close();
			this.setState({
				'hasStarted': false,
				'hasCalled': false,
				'hasStopped': false,
				'localStream': null,
				'remoteStream': null,
				'localPeerConnection': null,
				'remotePeerConnection': null
			});
			var ele = document.getElementById('vid_local');
			ele.srcObject = null;
			ele = document.getElementById('vid_remote');
			ele.srcObject = null;
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
						}, className: "btn " + (this.state.hasStarted ? 'btn-default disabled' : 'btn-success') }),
					_react2.default.createElement(_toolbar2.default, { val: 'Call', onClick: function onClick() {
							return _this2.callPeer();
						}, className: "btn " + (this.state.hasStarted ? this.state.hasCalled ? 'btn-default disabled' : 'btn-success' : 'btn-default disabled') }),
					_react2.default.createElement(_toolbar2.default, { val: 'Hang up', onClick: function onClick() {
							return _this2.hangup();
						}, className: "btn " + (this.state.hasStarted && this.state.hasCalled ? 'btn-success' : 'btn-default disabled') })
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
