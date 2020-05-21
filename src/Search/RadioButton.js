import React,{useState} from "react";

function RadioButton(props) {
  const name = props.name;
  const isActive = props.selected === name;

  return(
    <div className="option">
      {(isActive)?drawCircle(true):drawCircle(false)}
      <span className="option--text">{name}</span>
    </div>
  );

  function drawCircle(active) {
    if (active){
      return(
        <div className="circle radio--on">
          <div className="circle radio--in"/>
        </div>
      );
    } else {
      return <div className="circle radio--off"/>;
    }
  }
}

export default RadioButton;
