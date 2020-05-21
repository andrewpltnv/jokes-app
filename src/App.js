import React, {useState} from 'react';
import './App.css';
import './fonts.css';
import Search from "./Search/Search";
import Joke from "./Joke";

function App() {
  const [joke, setJoke] = useState(1);

  return (
    <div className="App">
      <main id="main">
        <h3>MSI 2020</h3>
        <Search setJoke={setJoke}/>
        {joke && <Joke role="medium"/>}
      </main>
      <div id="favourite">

      </div>
    </div>
  );
}

export default App;
