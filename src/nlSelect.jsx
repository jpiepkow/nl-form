var React = require('react');

const NlSelect = (props, context) => (
	<span>
	{props.text}
	<div className="nl-field nl-dd">
	<ul>
	{props.select.map(x => {
		return <li className="blur" onClick={props.changeDefault.bind(this,props.selectName,x.value)}>{x.value}</li>
	})} 
	</ul>
	</div>
	</span>
	);
export default NlSelect 

