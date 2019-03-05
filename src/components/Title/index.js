import React from "react";
import "./style.css";

function Title(props) {
  return (
  <>    
  <h1 className="title">{props.children}</h1>
  <p className="score">
    <span className="left">Score: <span>{props.score}</span></span>  <span className="right">Top Score: <span>{props.highScore}</span></span>
  </p>
  </>
  )
}

export default Title;
