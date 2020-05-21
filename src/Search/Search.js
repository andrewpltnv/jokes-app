import React,{useState} from 'react';
import RadioCircle from "./RadioCircle";
import RadioBox from "./RadioBox";

 function Search() {
   const [selected,select] = useState("Random");
   const [category,setCategory] = useState();

   const categories = ["ANIMAL","CAREER","CELEBRITY","DEV"];
   const listCats = categories.map((item) => {
     return <RadioBox select={setCategory} selected={category} form="box" name={item}/>
   });

  return (
    <div className="Search">
      <div className="search--title">
        <h1>Hey!</h1>
        <h2>Let’s try to find a joke for you:</h2>
      </div>
      <RadioCircle select={select} selected={selected} name="Random"/>
      <RadioCircle select={select} selected={selected} name="From categories">
        <div className="categories">
          {listCats}
        </div>
        </RadioCircle>
      <RadioCircle select={select} selected={selected} name="Search">

        </RadioCircle>
    </div>
  );
}

export default Search;
