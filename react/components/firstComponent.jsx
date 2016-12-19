import React from 'react'
import ReactDOM from 'react-dom'

class FirstComponent extends React.Component{
	render(){
		return (
			<h1> Native WebRTC</h1>
		);
	}
}

if(typeof window !== 'undefined')
	ReactDOM.render(<FirstComponent />, document.getElementById('root'));