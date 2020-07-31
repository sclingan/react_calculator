import React from 'react';
import './App.css';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        display: 0,
        prev: 0,
        next: '',
        total: 0,
        click: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleFunction = this.handleFunction.bind(this);
  }

  handleClick(event){  // takes the value that is input and adds it to display,total,prev
    this.setState({
      display: parseInt(this.state.display) + event.target.innerText,
      prev: parseInt(this.state.display) + event.target.innerText,
      next: '',
      total:  parseInt(this.state.display) + event.target.innerText,
      click: false,
    })
  }

  //make a function to handle the 'function' i.e(add,sub,mult,div),
  //make sure to change click to true, update the total and the prev states
  // also check if prev is set , if so add new value to next, update total
  handleFunction(event){

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
            <button className="btn" onClick={this.handleClick}>1</button>
            <button className="btn" onClick={this.handleClick}>2</button>
            <button className="btn" onClick={this.handleClick}>3</button>
            <button className="btn" onClick={this.handleClick}>4</button>
            <button className="btn" onClick={this.handleClick}>5</button>
            <button className="btn" onClick={this.handleClick}>6</button>
            <button className="btn" onClick={this.handleClick}>7</button>
            <button className="btn" onClick={this.handleClick}>8</button>
            <button className="btn" onClick={this.handleClick}>9</button>
            <button className="btn" onClick={this.handleClick}>0</button>
            <button className="btn" onClick={this.handleFunction}>+</button>
            <button className="btn" onClick={this.handleFunction}>-</button>
            <button className="btn" onClick={this.handleFunction}>x</button>
            <button className="btn" onClick={this.handleFunction}>&#xf7;</button>
            <button className="btn">.</button>
            <button className="btn" id="clear">C</button>
            <button className="btn">=</button>
        </div>
      </div>
     <div className="footer">Photo by Augustine Wong on Unsplash</div>
    </div>
  );
}
}
export default Calculator;
