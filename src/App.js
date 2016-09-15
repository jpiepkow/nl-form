import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
   super() 
   this.state = {
    options: {
      musicSelectOne: {
        options:[
          {
            value:'jazz',
            default:true
          },
          {
            value:'country',
            default:false
          },
          {
            value:'rap',
            default:false
          }
       ] 
      }
    }
  }
  this.thisClick = this.thisClick.bind(this);
  this.newDefault = this.newDefault.bind(this);
}
thisClick() {
  this.setState({clicked:!this.state.clicked})
};
newDefault(whatList,value) {
  // var newCurrent = this.state.options
  // var newState = newCurrent[whatList].options.map(x => {
  //   return value === x.value ? 
  //           {
  //             value:x.value,
  //             default:true
  //           } :
  //           {
  //             value:x.value,
  //             default:false
  //           }
  // })
  // newCurrent[whatList] = newState
  // console.log(this.state.options)
  // console.log(newCurrent)
  // this.setState({options:newCurrent})
};

render() {
  var popUp = <div className="nl-field nl-dd">
  <ul>
    {this.state.options.musicSelectOne.options.map(x => {
      return <li className="blur" onClick={this.newDefault.bind(this,'musicSelectOne',x.value)}>{x.value}</li>
    })}
  </ul>
</div>;
  var blah = !this.state.clicked ? this.state.options.musicSelectOne.options.filter(x => x.default)[0].value : popUp
  return (
    <form id="nl-form marg-top" className="nl-form">
    I feel like <span className="textStuff" onClick={this.thisClick}>{blah}</span> music
    </form>
    );
  }
}

export default App;
