import React from 'react';
import ReactDOM from 'react-dom';
import './Instruction_css.css';

class Instruction extends React.Component{
  start()
  {
    if(this.props.displayState)
    {
      return "none";
    }
  }
  render()
  {
    return(
        <div className="instructions" style={{display : this.start()}} >
          <ul style={{margin : "0px", listStyle : "none", padding : "0px"}}>
          <li>Two numbers will be generated.</li>
          <li>Enter the answer of the Expression in the input box.</li>
          <li>Press enter to submit, if the box turns green its correct</li>
          <li>Press start to begin :)</li>
          </ul>
        </div>
    )
  }
}

export default Instruction;
