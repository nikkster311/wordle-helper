import '../App.css';
import React, { useReducer, useState } from 'react';
import Board from "./Board";
import LetterList from "./LetterList";
import Options from "./Options";
import { isCompositeComponent } from 'react-dom/test-utils';

function WordleContainer({ allGuesses }) {

    // these arrays are lists of possible correct letters for each position
    const [pos1, setPos1] = useState({"a": "no", "b": "no", "c": "no", "d": "no", "e": "no", "f": "no", "g": "no", "h": "no", "i": "no", "j": "no", "k": "no", "l": "no", "m": "no", "n": "no", "o": "no", "p": "no", "q": "no", "r": "no", "s": "no", "t": "no", "u": "no", "v": "no", "w": "no", "x": "no", "y": "no", "z": "no"})
    const [pos2, setPos2] = useState({"a": "no", "b": "no", "c": "no", "d": "no", "e": "no", "f": "no", "g": "no", "h": "no", "i": "no", "j": "no", "k": "no", "l": "no", "m": "no", "n": "no", "o": "no", "p": "no", "q": "no", "r": "no", "s": "no", "t": "no", "u": "no", "v": "no", "w": "no", "x": "no", "y": "no", "z": "no"})
    const [pos3, setPos3] = useState({"a": "no", "b": "no", "c": "no", "d": "no", "e": "no", "f": "no", "g": "no", "h": "no", "i": "no", "j": "no", "k": "no", "l": "no", "m": "no", "n": "no", "o": "no", "p": "no", "q": "no", "r": "no", "s": "no", "t": "no", "u": "no", "v": "no", "w": "no", "x": "no", "y": "no", "z": "no"})
    const [pos4, setPos4] = useState({"a": "no", "b": "no", "c": "no", "d": "no", "e": "no", "f": "no", "g": "no", "h": "no", "i": "no", "j": "no", "k": "no", "l": "no", "m": "no", "n": "no", "o": "no", "p": "no", "q": "no", "r": "no", "s": "no", "t": "no", "u": "no", "v": "no", "w": "no", "x": "no", "y": "no", "z": "no"})
    const [pos5, setPos5] = useState({"a": "no", "b": "no", "c": "no", "d": "no", "e": "no", "f": "no", "g": "no", "h": "no", "i": "no", "j": "no", "k": "no", "l": "no", "m": "no", "n": "no", "o": "no", "p": "no", "q": "no", "r": "no", "s": "no", "t": "no", "u": "no", "v": "no", "w": "no", "x": "no", "y": "no", "z": "no"})

    const changePos = (letter, pos, update) => {
        if (pos[letter] === 'no') {
            pos[letter] = "maybe"
        } else if (pos[letter] === 'maybe') {
            pos[letter] = "yes"
        } else if (pos[letter] === 'yes') {
            pos[letter] = "no"
        }
        update({...pos})
        console.log("updated")
        console.log(pos)
    }

    const mappedGuesses = allGuesses.map((guess) =>
    <tr>
        <td className='pos1 no' onClick={() => {changePos(guess[0], pos1, setPos1)}}>{guess[0]}</td>
        <td className='pos2 no' onClick={() => {changePos(guess[1], pos2, setPos2)}}>{guess[1]}</td>
        <td className='pos3 no' onClick={() => {changePos(guess[2], pos3, setPos3)}}>{guess[2]}</td>
        <td className='pos4 no' onClick={() => {changePos(guess[3], pos4, setPos4)}}>{guess[3]}</td>
        <td className='pos5 no' onClick={() => {changePos(guess[4], pos5, setPos5)}}>{guess[4]}</td>
    </tr>
    )

  return (
    <div className="App">
        {/* <div>this is the fill array {fullArray[5]}</div> */}
        <div>{allGuesses}</div>
        <div>{mappedGuesses}</div>
        <Board />
        <LetterList />
        <Options />
    </div>
  );
}

export default WordleContainer;
