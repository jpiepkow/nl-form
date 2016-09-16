import React from 'react';
import ReactDOM from 'react-dom';
import NlFormContainer from './nlFormContainer';
import './index.css';
var callbackFunction = function(state){
	console.log(state)
}
var selectObj = {
	selectOne:[{
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
var sentence ="I like {selectOne} music and live in {country}"; 
ReactDOM.render(
	<NlFormContainer sentence={sentence} select={selectObj}  onSub={callbackFunction}/>,
	document.getElementById('root')
	);
