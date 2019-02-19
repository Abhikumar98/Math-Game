import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
  render()
  {
    let button = {
      height: "8vh",
      width: "15vw",
      borderStyle: "none",
      fontSize: ".5em",
      cursor : "pointer"
    }

    return(
      <div>
        <button type="button" disabled={(this.props.retry==0)?true:false} style={button} onClick = {() => this.props.regenerate()}>Refresh = {this.props.retry}</button>
      </div>
    )
  }
}

export default Button;
