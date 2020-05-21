import React,{useState} from 'react';
import RadioButton from "./RadioButton";

 function Search() {
   const [selected,select] = useState("Random");

  return (
    <div className="Search">
      <div className="search--title">
        <h1>Hey!</h1>
        <h2>Let’s try to find a joke for you:</h2>
      </div>
      <RadioButton toogle={select} selected={selected} name="Random" />
      <RadioButton toogle={select} selected={selected} name="From categories"/>
      <RadioButton toogle={select} selected={selected} name="Search"/>
    </div>
  );
}

export default Search;
