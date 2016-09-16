var React = require('react');

const NlText = (props, context) => (<span className="textStuff" onClick={props.click.bind(this,props.selectName,true)}>{props.text}</span>)

export default NlText 
