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
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({
      display: parseInt(this.state.display) + event.target.innerText,
      prev: 0,
      next: '',
      total: event.target.innerText,
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
            <button className="btn">+</button>
            <button className="btn">-</button>
            <button className="btn">x</button>
            <button className="btn">&#xf7;</button>
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
