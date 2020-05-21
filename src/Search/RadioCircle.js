import React from "react";

function RadioCircle(props) {
  const name = props.name;
  const isActive = props.selected === name;
  const handleSelect = (event) =>{
    props.select(name);
    event.preventDefault();
  };
  return(
    <>
      <div className="option" onClick={handleSelect}>
        {isActive?circleOn():circleOff()}
        <span className="option--text">{name}</span>
      </div>
      {(isActive) && props.children}
    </>
  );

  function circleOn() {
    return(
      <div className="circle circle--radio--on">
        <div className="circle circle--radio--in"/>
      </div>
    );
  }
  function circleOff() {
    return(<div className="circle circle--radio--off"/>);
  }
}

export default RadioCircle;
