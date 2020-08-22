import React from 'react';
import './App.css';
import calc from './calc.js'; 

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: '0',
      function: '',
      value1: '',
      value2: '',
      click: false,
      total: '',
      functionClick: false,
    }
    //bind all functions to this
    this.handleClick = this.handleClick.bind(this);
    this.handleFunction = this.handleFunction.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleClick(event){    //input the values into this.state.display, 
    //if this.state.click is true, remove leading zero and store display in this.state.value2, keep a running total in this.state.total
    if(this.state.click){
      this.setState({
        display: (String(this.state.display).startsWith('0')) ? String(this.state.display).replace('0','') + event.target.innerText : this.state.display + event.target.innerText,
        value2: (String(this.state.display).startsWith('0')) ? String(this.state.display).replace('0','') + event.target.innerText : this.state.display + event.target.innerText,
        click: this.state.click,
        total: calc(this.state.value1,(String(this.state.display).startsWith('0')) ? String(this.state.display).replace('0','') + event.target.innerText : this.state.display + event.target.innerText,this.state.function),
      })
    }else{
    this.setState({
      display: (String(this.state.display).startsWith('0')) ? String(this.state.display).replace('0','') + event.target.innerText : this.state.display + event.target.innerText,
      click: true,
    })
   }
   //if two decimal points are in display, find and remove one
   if(String(this.state.display).includes('.')){
    let last = String(this.state.display).lastIndexOf('.');
    let first = String(this.state.display).indexOf('.');
    if(first !== last){
      this.setState({
        display: (String(this.state.display).includes('..')) ? String(this.state.display).replace('.','') + event.target.innerText : parseFloat(this.state.display) + event.target.innerText,
      })
    }
  }
 }

 handleFunction(event){     //adds function(i.e 'add','subtract') to state, if 'subtract' is clicked first it makes a negative value                     
  this.setState({
    display: (this.state.display === '0' && event.target.id === "subtract") ? String(this.state.display).replace('0','-') : '0',
    function: (this.state.display === '0' && event.target.id === "subtract") ? this.state.function : event.target.id,
    value1: (this.state.functionClick) ? this.state.total : this.state.display,
    value2: '',
    click: this.state.click,
    total: (this.state.functionClick) ? this.state.total : this.state.display,  
    functionClick: true, 
  })
}

  handleClear(){     //clear all inputs and state, reset to 0
       this.setState({
        display: '0',
        function: '',
        value1: '',
        value2: '',
        click: false,
        total: '',
        functionClick: false,
       })
  }

  handleEquals(){     //display the total when equals is pressed
    this.setState({
      display: this.state.total,
    })
  }


  render(){
  return (
    <div className="wrapper">
      <div className="header">
          Calculator
          App
      </div>
      <div className="calc">
        <div id="display">
             {this.state.display}
        </div>
        <div className="btn-area">
            <button className="btn" id="one" onClick={this.handleClick}>1</button>
            <button className="btn" id="two" onClick={this.handleClick}>2</button>
            <button className="btn" id="three" onClick={this.handleClick}>3</button>
            <button className="btn" id="four" onClick={this.handleClick}>4</button>
            <button className="btn" id="five" onClick={this.handleClick}>5</button>
            <button className="btn" id="six" onClick={this.handleClick}>6</button>
            <button className="btn" id="seven" onClick={this.handleClick}>7</button>
            <button className="btn" id="eight" onClick={this.handleClick}>8</button>
            <button className="btn" id="nine" onClick={this.handleClick}>9</button>
            <button className="btn" id="zero" onClick={this.handleClick}>0</button>
            <button className="btn" id="add" onClick={this.handleFunction}>+</button>
            <button className="btn" id="subtract" onClick={this.handleFunction}>-</button>
            <button className="btn" id="multiply" onClick={this.handleFunction}>x</button>
            <button className="btn" id="divide" onClick={this.handleFunction}>&#xf7;</button>
            <button className="btn" id="decimal" onClick={this.handleClick}>.</button>
            <button className="btn" id="clear" onClick={this.handleClear}>C</button>
            <button className="btn" id="equals" onClick={this.handleEquals}>=</button>
        </div>
      </div>
     <div className="footer">Photo by Augustine Wong on Unsplash</div>
    </div>
  );
}
}
export default Calculator;
