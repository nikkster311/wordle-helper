import './App.scss';
import WordleContainer from './components/WordleContainer';
import Guess from './components/Guess';
import React, { useState } from 'react';

function App() {

  const [guess, setGuess] = useState([])
  const [allGuesses, setAllGuesses] = useState([])

  // const addGuess = (guessArray) => setAllGuesses(state => [...state, guessArray])

  // set guess state as array to word from Guess component
  function assignGuess(newguess) {
    var guessArray = new Array();
    for (var i = 0; i < newguess.length; i++) {
      guessArray.push(newguess[i])
    }
    setGuess(guessArray)
    // addGuess(guessArray)
    setAllGuesses(state => [...state, guessArray])
    console.log(allGuesses)
  }


  // TODO: get guess from guess container, pass to wordlecontainer
  return (
    <div className="App">
      <Guess assignGuess={assignGuess} />
      <WordleContainer allGuesses={allGuesses} />
    </div>
  );
}

export default App;
