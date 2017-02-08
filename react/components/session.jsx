import React from 'react'
import HeaderComponent from './header'
import ToolBarComponent from './toolbar'
import VideoContainerComponent from './videoContainer'

class SessionPageMain extends React.Component{
	getDefaultState(){
		return {
			'hasStarted': false,
			'hasMedia': false,
			'hasJoined': false,
			'localStream': null,
			'remoteStreams': {},
			'localRPC': null,
			'remoteRPC': {}
		};
	}

	constructor(){
		super();
		this.state = this.getDefaultState();
	}

	getMedia(){
		let mainThis = this;
		let constraints = {
			'audio': true,
			'video': true
		};

		let successMethod = function(stream){
			console.log("stream ", stream);
			let ele = document.getElementById('vid_local');
			ele.autoplay = true;
			ele.muted = true;
			ele.srcObject = stream;

			mainThis.setState({
				'hasStarted': true,
				'localStream': stream
			});

		};

		let failureMethod = function(err){
			console.log("Error in gUM " + err);
		};

		navigator.getUserMedia(constraints, successMethod, failureMethod);
	}

	hangup(){
		let ele = document.getElementById('vid_local');
		ele.srcObject = null;
		var mainThis = this;
		this.setState(mainThis.getDefaultState());
	}

	render(){
		const divStyle = {
			'border': '2px solid black'
		};

		return(
			<div className="container">
				<div className="col-md-3" style={divStyle}>
					<HeaderComponent type="2" val="Me"/>
					<div className="row">
						<ToolBarComponent val="Start" onClick={() => this.getMedia()} className={"btn " + (this.state.hasStarted ? 'btn-default disabled' : 'btn-success')}/>
						<ToolBarComponent val="Call" onClick={() => this.callPeer()} className={"btn " + (this.state.hasStarted ? (this.state.hasCalled ? 'btn-default disabled' : 'btn-success') : 'btn-default disabled')}/>
						<ToolBarComponent val="Hang up" onClick={() => this.hangup()} className={"btn " + (this.state.hasStarted ? 'btn-success' : 'btn-default disabled')}/>
					</div>
					<div className="row">
						<VideoContainerComponent id="local" className="col-md-12"/>
					</div>
				</div>
				<div className="col-md-9" style={divStyle}></div>
			</div>
		);
	}
}

export default SessionPageMain