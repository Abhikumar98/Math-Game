import React from 'react';
import ReactDOM from 'react-dom';
import './answer_css.css';

class Answer extends React.Component{
  userAnswer = (event)=>
  {
    event.preventDefault();
    let num1 = this.props.firstNumber;
    let num2 = this.props.secondNumber;
    let op = this.props.operator;
    let status;
    let ans;
    switch (op) {
      case 0:
      ans = num1 + num2;
      break;
      case 1:
      ans = num1 - num2;
      break;
      case 2:
      ans = num1 * num2;
      break;
      default:
      ans = 0;
    }
    status = ans == this.userInput.value;
    this.props.submitAnswer(status);
    this.userInput.value = null;
  }
  changecolor()
  {
    let status = this.props.status;
    switch (status) {
      case true:
      return "lightgreen";
      break;
      case false:
      return "red";
      break;

      default:
      return "yellow";
    }
  }
  render()
  {
    return(
      <div>
        <form onSubmit={(e)=>this.userAnswer(e)}>
          <input disabled={this.props.timer} type="number" style={{backgroundColor : this.changecolor()}}  maxlength="6" name="userInput" ref={(input)=>this.userInput = input}/>
        </form>
      </div>
    )
  }
}

export default Answer;
