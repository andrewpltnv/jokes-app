import React,{useState,useEffect} from "react";
import Joke from "../Joke";

function Catalog(props) {
  const [isOpen,setOpen] = useState(true);
  const [data,setData] = useState(JSON.parse(window.localStorage.getItem("funniestJokes")));
  const toggle = () => setOpen(!isOpen);
  useEffect(()=>{
    (props.new)&&setData(prevState => prevState.concat(props.new));
  },[props.new]);

  return(
    (isOpen)?opened():closed()
  );

  function opened() {
    return(
      <div className="">
        <div id="catalog">
          <h3 className="open--catalog opened" onClick={toggle}>
            <span>Favourite</span>
          </h3>
          <div className="jokes">
            {data && data.map((item)=>{
              return <Joke setData={setData} size="small" tmp={item} key={item.id}/>
            })}
          </div>
        </div>
      </div>
    );
  }
  function closed() {
    return(
      <h3 className="open--catalog" onClick={toggle}>
        <span>Favourite</span>
      </h3>
    );
  }
}

export default Catalog;
