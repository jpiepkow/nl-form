import React, { Component } from 'react';
import './App.css';
import NlForm from './nlForm';
export default class nlFormContainer extends Component {
	constructor(props) {
		super(props) 
		var clickObj = {}		
		for(var x in this.props.select) {
			clickObj[x] = false
		}
		this.state = {
			select:this.props.select,
			clicked:clickObj
		}
		this.onPress = this.onPress.bind(this)
		this.changeDefault = this.changeDefault.bind(this)
		this.popState = this.popState.bind(this)
	}

	onPress(name,clicked) {
		var newVal = this.state.clicked;
		newVal[name] = clicked;
		this.setState({
			clicked : newVal
		});
	}
	changeDefault(name,selection) {
		var newVal = this.state.select;
		var finalState = newVal[name].map(val => {
			return {
				value: val.value,
				selected: (val.value === selection) ?true:false
			}
		})
		newVal[name] = finalState
		this.setState({
			select:newVal
		})
		this.onPress(name,false);
	}
	popState() {
		this.props.onSub.call(this,this.state);	
	}

	render() {
		return (<NlForm onSub={this.popState} onPress={this.onPress} changeDefault={this.changeDefault} clicked={this.state.clicked} select={this.state.select} sentence={this.props.sentence} />)
	}
}


