import ReactDOM from 'react-dom'
import React from 'react'

// import VideoContainerComponent from "./videoContainer"
import HeaderComponent from "./header"
import FirstPageContainer from "./firstPageContainer"
// import ToolBarComponent from "./toolBar"



if(typeof window !== 'undefined'){
	ReactDOM.render(<div><HeaderComponent /></div>, document.getElementById('header'));
	ReactDOM.render(<div><FirstPageContainer /></div>, document.getElementById('root'));
}

