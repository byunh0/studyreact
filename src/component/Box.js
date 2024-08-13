import React from 'react'
import "../App.css"

const Box = (props) => {
 let result;
 if( props.title =="Computer"&& props.result !=="tie"&& props.result !== "")
 {result = props.result === "win" ? "lose": "win"}else{
    result = props.result;
 }
  return (
    <div className={`box ${result}`}>
      <h3>{props.title}</h3>
      <img className="box-img" src={props.item && props.item.img}></img>
      <div >{result}</div>
    </div>
  );
}
export default Box