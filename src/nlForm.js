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
  getWordsBetweenCurlies(this.props.sentence)
    .forEach(x => {
      console.log((this.props.clicked[x]))
      this.newSentence = this.props.sentence
      this.newSentence = reactStringReplace(this.newSentence,`{${x}}`,(match,i) => ((this.props.clicked[x]) 
        ? 
        (<NlSelect select={this.props.select[x]} />) 
        : 
        (<NlText text={getSelected(this.props.select[x])}  selectName={x} click={this.props.onPress}/>)
      ))
        console.log(this.newSentence)
    })
  return (
    <form id="nl-form marg-top" className="nl-form">
    {this.newSentence}
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

