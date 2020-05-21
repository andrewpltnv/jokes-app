import React,{useState,useEffect} from 'react';
import RadioCircle from "./RadioCircle";
import RadioBox from "./RadioBox";

 function Search(props) {
   const [selected,select] = useState("random");
   const [category,setCategory] = useState("animal");
   const [input,setInput] = useState('');
   const [categories,setCategories] = useState([]);
   useEffect(() => {
     async function getArray(){
       await fetch("https://api.chucknorris.io/jokes/categories")
       .then(res => res.json())
       .then(array => setCategories(array.slice(0,6)));
     }
     getArray().then(array => console.log(array));
   },[]);

   const listCats = categories.map((item) => {
     return <RadioBox select={setCategory} selected={category} form="box" name={item} key={category}/>
   });

   const handleChange = (event) => {
     setInput(event.target.value);
   };
   async function handleSubmit(event){
     event.preventDefault();
     let link = "https://api.chucknorris.io/jokes/";
     if (selected === "random") {
       link += selected;
     } else if (selected === "category"){
       link += "random?category="+category;
     } else {
       link += "search?query="+input;
     }
     const response = await fetch(link);
     const json = await response.json();
     console.log(json);
     props.setJoke((selected==="search")?json[0]:json);
   }
  return (
    <form className="Search" target="_self" onSubmit={handleSubmit}>
      <div className="search--title">
        <h1>Hey!</h1>
        <h2>Let’s try to find a joke for you:</h2>
      </div>
      <RadioCircle select={select} selected={selected} name="Random" state="random"/>
      <RadioCircle select={select} selected={selected} name="From categories" state="category">
        <div className="categories">
          {listCats}
        </div>
      </RadioCircle>
      <RadioCircle select={select} selected={selected} name="Search" state="search">
        <input type="text" className="input--area" id="placeholder"
               placeholder={"Free text search..."} value={input}
               onChange={handleChange} minLength={3} maxLength={110}/>
      </RadioCircle><br/>
      <button type="submit" className="search--button">
        <span className="search--button--text" onClick={handleSubmit}>Get a joke</span>
      </button>
    </form>
  );
}

export default Search;
