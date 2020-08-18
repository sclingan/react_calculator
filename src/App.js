import React from 'react';
import './App.css';
import calc from './calc.js'; 

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        display: 0,
        prev: 0,
        next: '',
        total: 0,
        click: false,
        function: '',
        functionClick: false,
        dec: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleFunction = this.handleFunction.bind(this);
    this.handleFunction = this.handleFunction.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleClick(event){  // takes the value that is input and adds it to display,total,prev
    if(this.state.click === true){
      this.setState({
        display: String(this.state.display).replace('0','') + event.target.innerText,
        prev: this.state.prev, 
        next: String(this.state.display) + event.target.innerText,
        total: calc(this.state.prev,this.state.display + event.target.innerText,this.state.function), 
        click: true,
        function: this.state.function,
        functionClick: this.state.functionClick,
        dec: this.state.dec, 
      })
    }else{
    this.setState({
      display: String(this.state.display).replace('0','') + event.target.innerText,
      prev: String(this.state.display).replace('0','') + event.target.innerText,
      next: '',
      total:  String(this.state.display).replace('0','') + event.target.innerText,
      click: false,
      function: '',
      functionClick: false, 
      dec: false,
    })
  }
}

  handleFunction(event){  //make an if to handle if this.state.function has been clicked
    if(this.state.functionClick === true){
      this.setState({
        display: 0,
        prev: this.state.total,
        next: '',
        total: calc(this.state.prev,this.state.next,this.state.function),
        click: true,
        function: event.target.id,
        functionClick: true,
        dec: this.state.dec,
      })
    }else{
    this.setState({       // then handle keeping total correct
      display: 0,
      prev: this.state.prev,
      next: this.state.next,
      total: this.state.total,
      click: true,
      function: event.target.id,
      functionClick: true,
      dec: this.state.dec,
    })
   }
  }


  handleDecimal(event){      // change all inputs and state to use floats
    if(this.state.dec === true){
      this.setState({
          display: String(this.state.display) + event.target.innerText,
          prev: String(this.state.display) + event.target.innerText,
          next: String(this.state.display) + event.target.innerText,
          total: this.state.total,
          click: this.state.click,
          function: this.state.function,
          functionClick: this.state.functionClick,
          dec: true,
      })
    }else{
      this.setState({
        display: parseInt(this.state.display) + event.target.innerText,
        prev:  this.state.prev,
        next:  this.state.next,
        total:  this.state.total,
        click:  true,
        function: this.state.function,
        functionClick: this.state.functionClick,
        dec: true,
      })
   }
  }

  handleClear(){     //clear all inputs and state, reset to 0
       this.setState({
         display: 0,
         prev: '',
         next: '',
         total: '',
         click: false,
         function: '',
         functionClick: false,
         dec: false,
       })
  }

  handleEquals(){     //display the total when equals is pressed
    this.setState({
      display: this.state.total,
      prev: this.state.total,
      next: this.state.total,
      total: this.state.total,
      click: true,
      function: this.state.function,
      functionClick: '', 
      dec: this.state.dec,
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
            <button className="btn" id="ten" onClick={this.handleClick}>0</button>
            <button className="btn" id="add" onClick={this.handleFunction}>+</button>
            <button className="btn" id="subtract" onClick={this.handleFunction}>-</button>
            <button className="btn" id="multiply" onClick={this.handleFunction}>x</button>
            <button className="btn" id="divide" onClick={this.handleFunction}>&#xf7;</button>
            <button className="btn" id="decimal" onClick={this.handleDecimal}>.</button>
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
