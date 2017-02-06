import React from 'react'
import ToolBarComponent from './toolbar'
import VideoContainerComponent from './videoContainer'

class FirstPageContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			'hasStarted': false,
			'hasCalled': false,
			'hasStopped': false,
			'localStream': null,
			'remoteStream': null,
			'localPeerConnection': null,
			'remotePeerConnection': null
		};
	}

	getMedia(){
		let mainThis = this;
		let constraints = {
			'audio': false,
			'video': true
		};

		let successMethod = function(stream){
			mainThis.setState({
				'hasStarted': true,
				'localStream': stream
			});
			let ele = document.getElementById('vid_local');
			ele.autoplay = true;
			ele.srcObject = stream;
		};

		let failureMethod = function(err){
			console.log("Error in gUM " + err);
		};

		navigator.getUserMedia(constraints, successMethod, failureMethod);
	}

	callPeer(){
		let mainThis = this;
		let servers = null;
		let pc1 = new RTCPeerConnection(servers);
		let pc2 = new RTCPeerConnection(servers);

		pc1.onicecandidate = function(event){
			if(event.candidate)
				pc2.addIceCandidate(new RTCIceCandidate(event.candidate));
		};

		pc2.onicecandidate = function(event){
			if(event.candidate)
				pc1.addIceCandidate(new RTCIceCandidate(event.candidate));
		};

		
		pc2.onaddstream = function(event){
			mainThis.setState({
				'remoteStream': event.stream,
				'hasCalled': true,
				'localPeerConnection': pc1,
				'remotePeerConnection': pc2
			});
			let ele = document.getElementById('vid_remote');
			ele.autoplay = true;
			ele.srcObject = event.stream;
		}
		pc1.addStream(this.state.localStream);

		let offerOptions = {
		  offerToReceiveAudio: 1,
		  offerToReceiveVideo: 1
		};
		pc1.createOffer(offerOptions).then(function(offerDesc){
			pc1.setLocalDescription(offerDesc).then(function(){}, function(err){console.log("err1 ", err)});
			pc2.setRemoteDescription(offerDesc).then(function(){}, function(err){console.log("err2 ", err)});

			pc2.createAnswer().then(function(answerDesc){
				pc2.setLocalDescription(answerDesc).then(function(){}, function(err){console.log("err3 ", err)});
				pc1.setRemoteDescription(answerDesc).then(function(){}, function(err){console.log("err4 ", err)});
			});
		});
	}

	hangup(){
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
		let ele = document.getElementById('vid_local');
		ele.srcObject = null;
		ele = document.getElementById('vid_remote');
		ele.srcObject = null;
	}


	render(){
		return (
			<div className="container">
				<div className="row">
					<ToolBarComponent val="Start" onClick={() => this.getMedia()} className={"btn " + (this.state.hasStarted ? 'btn-default disabled' : 'btn-success')}/>
					<ToolBarComponent val="Call" onClick={() => this.callPeer()} className={"btn " + (this.state.hasStarted ? (this.state.hasCalled ? 'btn-default disabled' : 'btn-success') : 'btn-default disabled')}/>
					<ToolBarComponent val="Hang up" onClick={() => this.hangup()} className={"btn " + (this.state.hasStarted&&this.state.hasCalled ? 'btn-success' : 'btn-default disabled')}/>
				</div>
				<div className="row">
					<VideoContainerComponent id="local"/>
					<VideoContainerComponent id="remote"/>
				</div>
			</div>
		);
	}
}

export default FirstPageContainer