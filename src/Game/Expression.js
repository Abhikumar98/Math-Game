import React from 'react';
import ReactDOM from 'react-dom';
import './expression_css.css'

const Expression = (props)=>
{
  let symbols = ['+','-','x'];
  return(
    <div className="expressionBox">
      <span className="operands">{props.firstNumber}</span>
      <span>{symbols[props.operator]}</span>
      <span className="operands">{props.secondNumber} </span>
      =
    </div>
  )
}

export default Expression;
