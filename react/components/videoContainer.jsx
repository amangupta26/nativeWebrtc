import React from 'react'

class VideoContainerComponent extends React.Component{
	getContainerId(id){
		return "vidContainer_" + id;
	}

	getVideoId(id){
		return "vid_" + id;
	}


	render(){
		const divStyle = {
			'border': '2px solid black'
		};

		const videoStyle = {
			'width': '100%',
			'height': '100%'
		};

		return (
			<div id={this.getContainerId(this.props.id)} className="col-sm-4" style={divStyle}>
				<video id={this.getVideoId(this.props.id)} style={videoStyle}></video>
			</div>
			
		);
	}
}

export default VideoContainerComponent