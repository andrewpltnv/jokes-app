import React, {useEffect, useState} from 'react';
import './App.css';
import './fonts.css';
import Search from "./Search/Search";
import Joke from "./Joke";
import Catalog from "./Catalog/Catalog";

function App() {
  const [joke, setJoke] = useState();
  const [isInvited,invite] = useState();
  const wasLiked = (item) =>{
    invite(item);
  };
  useEffect(()=>{

  },[joke]);
  return (
    <div className="App">
      <main id="main" className="section">
        <header id="unknownLabel">
          <h3>
            MSI 2020
            <Catalog new={isInvited}/>
          </h3>
        </header>
        <Search setJoke={setJoke}/>
        {(joke?<Joke size="medium" tmp={joke} add={wasLiked}/>:<></>)}
      </main>
    </div>
  );
}

export default App;
