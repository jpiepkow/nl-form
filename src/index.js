import React from 'react';
import ReactDOM from 'react-dom';
import NlFormContainer from './nlFormContainer';
import './index.css';
ReactDOM.render(
  <NlFormContainer sentence="I like {selectOne} music" select={{selectOne:[{value:'Jazz',selected:true},{value:'Rap',selected:false}]}} selectClick={{selectOne:false}} onSub={function(callback){}} />,
  document.getElementById('root')
);
