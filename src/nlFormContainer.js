import React, { Component } from 'react';
import './App.css';
import NlForm from './nlForm';
export default class nlFormContainer extends Component {
  constructor(props) {
   super(props) 
   console.log(this.props)
   this.state = {
   		select:this.props.select,
   		clicked:this.props.selectClick
   }
   this.onPress = this.onPress.bind(this)
}

onPress(name,clicked) {
	var newVal = this.state.clicked;
	console.log(newVal)
	newVal[name] = clicked;
	this.setState({
		clicked : newVal
	});
}

	render() {
		return (<NlForm onSub={this.props.onSub} onPress={this.onPress} clicked={this.state.clicked} select={this.state.select} sentence={this.props.sentence} />)
	}
}

 
