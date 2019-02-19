import React from 'react';
import ReactDOM from 'react-dom';
import Expression from './Expression';
import Button from './Button';
import Answer from './Answer';
import Instruction from './Instruction';

class Game extends React.Component{
  constructor(props)
  {
    super();
    this.regenerate = this.regenerate.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.limitRegeneration = this.limitRegeneration.bind(this);
    this.start = this.start.bind(this);
    this.working = this.working.bind(this);
    this.state = {
      firstNumber : Math.ceil(Math.random()*99) + 1,   //random selection of numbers
      secondNumber : Math.ceil(Math.random()*99) + 1,   //random selection of numbers
      operator : Math.floor(Math.random()*3),   //random selection of operation
      result : null, //true or false Answer
      retry : 5,   //limited number of regeneration of random expression
      correctAnswer : null,  //number of correct answer given by the user
      start : null,
      timeSecs : 59,
      timeMins : 1,
      timer : false
    }
  }

  submitAnswer = (status)=>
  {
    this.setState({
      result : status
    });
    if(status)
    {
      this.setState((prevState)=>
    ({
      correctAnswer : prevState.correctAnswer + 1
    }))
      this.regenerate();
    }

  }


  regenerate()
  {
    this.setState({
      firstNumber : Math.ceil(Math.random()*99) + 1,
      secondNumber : Math.ceil(Math.random()*99) + 1,
      operator : Math.floor(Math.random()*3)
    })
  }

  limitRegeneration()
  {
    this.setState((prevState)=>({
      retry : prevState.retry - 1
    }));
    if(this.state.retry > 0)
    {
      this.regenerate();
    }
  }
  start()
  {
    this.setState({
      start : true
    });
    if(this.state.timeSecs != 0 && this.state.timeMins != 0)
    {
      this.time = setInterval(this.working, 1000);
    }
  }
  working()
  {
    if(this.state.timeSecs == 1 && this.state.timeMins == 0)
    {
      clearInterval(this.time);
      this.setState({
        timer : true
      });
    }
    if(this.state.timeSecs == 0 && this.state.timeMins == 0)
    {
      alert("your time is up and your total score is : ",this.state.correctAnswer);
    }
    if(this.state.timeSecs==1 && this.state.timeMins!=0)
    {
      this.setState((prevState)=>({
        timeMins : prevState.timeMins - 1,
        timeSecs : 59
      }));
    }
    this.setState((prevState)=>
    ({
      timeSecs : prevState.timeSecs - 1
    }));
    console.log(this.state.timeMins);
    console.log(this.state.timeSecs);
  }
  render()
  {
    let container = {
      width: "70%",
      display : "flex",
      justifyContent: "space-around",
      fontSize: "7vh",
      marginLeft : "auto",
      marginRight : "auto",
    }
    return(
      <div style={{fontFamily : "Helvetica", textAlign : "center"}}>
        <h1>Test your Maths Skills</h1>
        <div className="container" style={container}>
          <Instruction displayState={this.state.start}/>
          <Expression firstNumber={this.state.firstNumber} secondNumber={this.state.secondNumber} operator={this.state.operator} />
          <Answer submitAnswer={this.submitAnswer}
            firstNumber={this.state.firstNumber}
            secondNumber={this.state.secondNumber}
            operator={this.state.operator}
            status={this.state.result}
            timer={this.state.timer}
            correctanswer={this.state.correctAnswer} />
          <Button regenerate={this.limitRegeneration} retry={this.state.retry}/>
        </div>
        <h1>Your score is : {this.state.correctAnswer}</h1>
        <button type="button" disabled={(this.state.start)?true:false} onClick={this.start}>start</button>
        <h1>Time : {this.state.timeMins}:{this.state.timeSecs}</h1>
      </div>
    )
  }
}

export default Game;
