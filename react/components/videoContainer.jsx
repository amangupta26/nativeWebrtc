import React from 'react'

class VideoContainerComponent extends React.Component{
	getContainerId(id){
		return "vidContainer_" + id;
	}

	getVideoId(id){
		return "vid_" + id;
	}

	render(){
		return (
			<div id={this.getContainerId(this.props.id)}>
				<video id={this.getVideoId(this.props.id)}></video>
			</div>
			
		);
	}
}

export default VideoContainerComponent