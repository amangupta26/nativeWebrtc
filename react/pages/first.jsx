import ReactDOM from 'react-dom'
import React from 'react'

import VideoContainerComponent from "./videoContainer"
import FirstComponent from "./firstComponent"


if(typeof window !== 'undefined'){
	ReactDOM.render(<div><FirstComponent /> <VideoContainerComponent id="local"/></div>, document.getElementById('root'), getMedia());
}

function getMedia(){
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
};