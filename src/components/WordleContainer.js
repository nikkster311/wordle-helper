import '../App.css';
import React, { useState } from 'react';
import Board from "./Board";
import LetterList from "./LetterList";
import Options from "./Options";

function WordleContainer({ newGuess }) {
    const fullArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    // these arrays are lists of possible correct letters for each position
    const [state, setPos] = useState({
        pos1: fullArray,
        pos2: fullArray,
        pos3: fullArray,
        pos4: fullArray,
        pos5: fullArray
    })
    
    // const [pos2, setPos2] = useState(fullArray)
    // const [pos3, setPos3] = useState(fullArray)
    // const [pos4, setPos4] = useState(fullArray)
    // const [pos5, setPos5] = useState(fullArray)

  return (
    <div className="App">
        <span>{fullArray}</span>
        <span> new guess = {newGuess}</span>
        <Board />
        <LetterList />
        <Options />
    </div>
  );
}

export default WordleContainer;
