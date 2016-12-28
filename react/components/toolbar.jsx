import React from 'react'

class ToolBarComponent extends React.Component{
	render(){
		return (
			<button onClick={() => this.props.onClick()} className={this.props.className}> {this.props.val}</button>
		);
	}
}


export default ToolBarComponent