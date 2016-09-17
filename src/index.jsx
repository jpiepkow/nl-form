import React from 'react';
import ReactDOM from 'react-dom';
import NlFormContainer from './nlFormContainer';
import './index.css';
//This page is for Showing test usage.
var callbackFunction = function(state){
	document.getElementById("result").innerHTML = JSON.stringify(state);
	console.log(state);
}
var selectObj = {
	music:[{
		value:'Jazz',
		selected:true
	},
	{
		value:'Rap',
		selected:false
	}],
	country:[{
		value:'United States',
		selected:true
	},
	{
		value:'Europe',
		selected:false
	}]
}
var sentence ="I like {music} music and live in {country}"; 
ReactDOM.render(
	<NlFormContainer sentence={sentence} select={selectObj}  onSub={callbackFunction}/>,
	document.getElementById('root')
	);
