import React from 'react';   //React is the object and react is the  
import ReactDOM from 'react-dom';
//import  'bootstrap/dist/css/bootstrap.css';
//import CounterComponent from './components/CounterComponent';
import ClockComponent from './components/ClockComponent';

//ReactDOM.render(<CounterComponent/>, document.getElementById('root'));
//const element = <FunctionName name="Digvijay" />;
setInterval(tick,1000);
function tick() {
	const element = <center><ClockComponent /></center>;
	ReactDOM.render(element,document.getElementById('root'));

}
