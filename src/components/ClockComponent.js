import React, { Component } from 'react';
import json from '../data/data.json'
import './ClockComponent.css'

class ClockComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {counter : 0, particularValue : "Click the button to see which DC superhero are YOU!!!"};
		this.handleClick = this.handleClick.bind(this);
		this.value = json.names;
	}
	handleClick() {
		this.setState({particularValue : this.value[Math.floor(Math.random()*6897)%50]});
	}
	render() {
		return(
			<div>
				<h2>
					 {this.state.particularValue}
				</h2>
				<button onClick={this.handleClick}>
					 Ultimate Button
				</button>
			</div>
		);
	}

}
export default ClockComponent;