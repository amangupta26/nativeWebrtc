import React from 'react'
import HeaderComponent from './header'
import ToolBarComponent from './toolbar'
import VideoContainerComponent from './videoContainer'

class SessionPageMain extends React.Component{
	constructor(){
		super();
		this.state = {
			'hasStarted': false,
			'hasMedia': false,
			'hasJoined': false,
			'localStream': null,
			'remoteStreams': {},
			'localRPC': null,
			'remoteRPC': {}
		};
	}

	getMedia(){
		let mainThis = this;
		let constraints = {
			'audio': true,
			'video': true
		};

		let successMethod = function(stream){
			mainThis.setState({
				'hasStarted': true,
				'localStream': stream
			});
			let ele = document.getElementById('vid_local');
			ele.autoplay = true;
			ele.muted = true;
			ele.srcObject = stream;
		};

		let failureMethod = function(err){
			console.log("Error in gUM " + err);
		};

		navigator.getUserMedia(constraints, successMethod, failureMethod);
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
						<ToolBarComponent val="Start" onClick={() => this.getMedia()}/>
						<ToolBarComponent val="Hang up"/>
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