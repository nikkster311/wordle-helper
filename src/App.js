import './App.css';
import WordleContainer from './components/WordleContainer';
import Guess from './components/Guess';
import React, { useState } from 'react';

function App() {

  const [guess, setGuess] = useState([])

  // set guess state as array to word from Guess component
  function assignGuess(newguess) {
    let guessArray = []
    for (var i = 0; i < newguess.length; i++) {
      guessArray.push(newguess[i])
    }
    setGuess(guessArray)
  }

  // TODO: get guess from guess container, pass to wordlecontainer
  return (
    <div className="App">
      {guess}
      <Guess assignGuess={assignGuess} />
      <WordleContainer newGuess={guess} />
    </div>
  );
}

export default App;
