import React from 'react'
import ToolBarComponent from './toolbar'
import VideoContainerComponent from './videoContainer'

class FirstPageContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			'hasStarted': false,
			'hasCalled': false,
			'hasStopped': false
		};
	}

	getMedia(){
		var constraints = {
			'audio': false,
			'video': true
		};

		var successMethod = function(stream){
			var ele = document.getElementById('vid_local');
			ele.autoplay = true;
			ele.srcObject = stream;
		};

		var failureMethod = function(err){
			console.log("Error in gUM " + err);
		}

		navigator.mediaDevices.getUserMedia(constraints).
			then(successMethod, failureMethod);
	}

	render(){
		return (
			<div className="container">
				<div className="row">
					<ToolBarComponent val="Start" onClick={() => this.getMedia()}/>
					<ToolBarComponent val="Call"/>
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