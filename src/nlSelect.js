var React = require('react');

const NlSelect = (props, context) => (
   <span>
    <div className="nl-field nl-dd">
  <ul>
    {props.select.map(x => {
      return <li className="blur">{x.value}</li>
    })} 
  </ul>
</div>
</span>
  );
export default NlSelect 

