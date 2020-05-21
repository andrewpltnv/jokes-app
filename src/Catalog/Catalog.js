import React,{useState,useEffect} from "react";
import Joke from "../Joke";

function Catalog(props) {
  const [isOpen,setOpen] = useState(true);
  const [data,setData] = useState([{}]);
  const toggle = () => setOpen(!isOpen);
  useEffect(()=>{
    setData((props.new)
      ?JSON.parse(window.localStorage.getItem("funniestJokes")).concat((props.new))
      :JSON.parse(window.localStorage.getItem("funniestJokes")))
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
              return <Joke setData={setData} size="small" tmp={item}/>
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
