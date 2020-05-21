import React from "react";

function RadioBox(props) {
  const name = props.name;
  const isActive = props.selected === name;
  const handleSelect = (event) =>{
    props.select(name);
    event.preventDefault();
  };

  return(
    <div className={"box box--radio--" + isActive} onClick={handleSelect}>
      <span className="box--text">{name}</span>
    </div>
  );
}

export default RadioBox;
