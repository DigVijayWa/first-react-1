import React, { Component } from 'react';

class CounterComponent extends Component {
	
	render() {
		return <button>This is Sparta!!! {new Date().toLocaleTimeString()}</button>;
	}
}

export default CounterComponent;