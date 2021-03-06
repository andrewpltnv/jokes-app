import React,{useState} from "react";
import like from "./like.svg";
import dislike from "./dislike.svg";
import message from "./message.svg";

function Joke(props) {
  const data = props.tmp;
  const size = props.size;

  function subscribe() {
    const prevState = JSON.parse(window.localStorage.getItem("funniestJokes"));
    const temp = prevState
      ?JSON.stringify((prevState.filter((item)=>{
        return item.id !== data.id;
      })).concat(data))
      :JSON.stringify([data]);
    window.localStorage.setItem("funniestJokes",temp);
    props.add(data);
  }
  function unSubscribe(id) {
    const prevState = JSON.parse(window.localStorage.getItem("funniestJokes"));
    const filtered = prevState.filter((item)=>{
      return item.id !== id;
    });
    props.setData(filtered);
    window.localStorage.setItem("funniestJokes",JSON.stringify(filtered));
  }

  const action = (size==="medium")?dislike:like;
  const className = "joke joke--" + size;

  return(
    <div className={className}>
      <div className="rate">
        <img src={action} onClick={size==="small"?()=>{unSubscribe(data.id)}:subscribe}
             alt={size==="small"?"Like":"Dislike"}/>
      </div>
      <div className="frame--wrapper">
        <div className="frame">
          <img src={message} alt="mes" className="frame--icon"/>
        </div>
        <div className="data">
          <p className="joke--id">ID:<a href={data.url}>{data.id}</a></p>
          <h4 className="joke--text">{data.value}</h4>
          <p className="joke--tags">
            <span className="date--text">
              Last update:{data.updated_at.toString().slice(0,10)}
            </span>
            {(data.categories!==[])
              ?<span className="box--text">{data.categories[0]}</span>
              :<></>}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Joke;
