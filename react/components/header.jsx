import React from 'react'

class HeaderComponent extends React.Component{
	render(){
		switch(this.props.type){
			case '1':
				return(
					<h1 className={this.props.className}>{this.props.val}</h1>
				);

			case '2':
				return(
					<h2 className={this.props.className}>{this.props.val}</h2>
				);
		}
	}
}

export default HeaderComponent