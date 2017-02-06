import ReactDOM from 'react-dom'
import React from 'react'

// import VideoContainerComponent from "./videoContainer"
import HeaderComponent from "./header"
import FirstPageContainer from "./firstPageContainer"
// import ToolBarComponent from "./toolBar"



if(typeof window !== 'undefined'){
	ReactDOM.render(<div><HeaderComponent type="1" val="Native WebRTC"/></div>, document.getElementById('header'));
	ReactDOM.render(<div><FirstPageContainer /></div>, document.getElementById('root'));
}

