import React from 'react';
import './App.css';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
  return (
    <div className="wrapper">
      <div className="header">
          <h3>Calculator</h3>
          <h3>App</h3>
      </div>
      <div className="calc">
        <div id="display">

        </div>
        <div className="btn-area">
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn">0</button>
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
