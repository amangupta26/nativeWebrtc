import ReactDOM from 'react-dom'
import React from 'react'


import HeaderComponent from "./header"
import SessionPageMain from "./sessionContainer"

if(typeof window !== 'undefined'){
	ReactDOM.render(<div><HeaderComponent type="1" val="Native WebRTC with signalling" className="text-center"/></div>, document.getElementById('header'));
	ReactDOM.render(<div><SessionPageMain /></div>, document.getElementById('root'));
}