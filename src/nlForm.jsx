import React, { Component } from 'react';
import './App.css';
const reactStringReplace = require('react-string-replace')
import NlSelect from './nlSelect';
import NlText from './nlText';

export default class nlForm extends Component {
  constructor(props) {
   super(props) 
 }
 render() {
  this.newSentence = this.props.sentence
  getWordsBetweenCurlies(this.props.sentence)
  .forEach(x => {
    this.newSentence = reactStringReplace(this.newSentence,`{${x}}`,(match,i) => ((this.props.clicked[x]) 
      ? 
      (<NlSelect select={this.props.select[x]} changeDefault={this.props.changeDefault} text={getSelected(this.props.select[x])} selectName={x} />) 
      : 
      (<NlText text={getSelected(this.props.select[x])}  selectName={x} click={this.props.onPress}/>)
      ))
  })
  return (
    <form id="nl-form marg-top" className="nl-form">
    {this.newSentence}
    <br/>
    <button type='button' style={{cursor:'pointer'}} onClick={this.props.onSub.bind(this)}>Submit</button>
    </form>
    );
}
}
function getSelected(arr) {
  return arr.filter(x => x.selected)[0].value
}
function getWordsBetweenCurlies(str) {
  var results = [], re = /{([^}]+)}/g, text;

  while(text = re.exec(str)) {
    results.push(text[1]);
  }
  return results;
}

