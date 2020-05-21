import React from "react";

function RadioCircle(props) {
  const {name,state,select,selected} = props;
  const isActive = selected === state;
  const handleSelect = (event) =>{
    select(state);
    event.preventDefault();
  };
  return(
    <>
      <div className="option" onClick={handleSelect}>
        {isActive?circleOn():circleOff()}
        <h4 className="option--text">{name}</h4>
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
