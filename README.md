nl-form
==========
Description: This project was a recreation of  [This Natural Language Form](http://tympanus.net/codrops/2013/05/21/natural-language-form-with-custom-input-elements/).

The key differences in this project are
	
1.This project is dynamic in the sense that you pass it a string and object representation of the select and it does all the replacement dynamically.

2.As of version one only uses select elements as compared to input also like the example above.

3.Not nearly as styled as the version linked above. v1 is purly for functionality


####usage:
```
import React from 'react';
import ReactDOM from 'react-dom';
import NlFormContainer from './nlFormContainer';
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
	<NlFormContainer 
		sentence={sentence} 
		select={selectObj}  
		onSub={callbackFunction}/>,
	document.getElementById('root'));
```

####Callback: 
The callback passed in is passed out the entire internal state of the component so that you can do things like make api calls with your new nl-form

####How to run:
npm install

npm start
