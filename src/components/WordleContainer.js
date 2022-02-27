import '../App.scss';
import React, { useState } from 'react';
import Board from "./Board";
import LetterList from "./LetterList";
import Options from "./Options";
// import { isCompositeComponent } from 'react-dom/test-utils';

function WordleContainer({ allGuesses }) {

    // these arrays are lists of possible correct letters for each position
    const [alphabet, setAlphabet] = useState({"a": "unused", "b": "unused", "c": "unused", "d": "unused", "e": "unused", "f": "unused", "g": "unused", "h": "unused", "i": "unused", "j": "unused", "k": "unused", "l": "unused", "m": "unused", "n": "unused", "o": "unused", "p": "unused", "q": "unused", "r": "unused", "s": "unused", "t": "unused", "u": "unused", "v": "unused", "w": "unused", "x": "unused", "y": "unused", "z": "unused"})
    const [pos1, setPos1] = useState({"a": "unused", "b": "unused", "c": "unused", "d": "unused", "e": "unused", "f": "unused", "g": "unused", "h": "unused", "i": "unused", "j": "unused", "k": "unused", "l": "unused", "m": "unused", "n": "unused", "o": "unused", "p": "unused", "q": "unused", "r": "unused", "s": "unused", "t": "unused", "u": "unused", "v": "unused", "w": "unused", "x": "unused", "y": "unused", "z": "unused"})
    const [pos2, setPos2] = useState({"a": "unused", "b": "unused", "c": "unused", "d": "unused", "e": "unused", "f": "unused", "g": "unused", "h": "unused", "i": "unused", "j": "unused", "k": "unused", "l": "unused", "m": "unused", "n": "unused", "o": "unused", "p": "unused", "q": "unused", "r": "unused", "s": "unused", "t": "unused", "u": "unused", "v": "unused", "w": "unused", "x": "unused", "y": "unused", "z": "unused"})
    const [pos3, setPos3] = useState({"a": "unused", "b": "unused", "c": "unused", "d": "unused", "e": "unused", "f": "unused", "g": "unused", "h": "unused", "i": "unused", "j": "unused", "k": "unused", "l": "unused", "m": "unused", "n": "unused", "o": "unused", "p": "unused", "q": "unused", "r": "unused", "s": "unused", "t": "unused", "u": "unused", "v": "unused", "w": "unused", "x": "unused", "y": "unused", "z": "unused"})
    const [pos4, setPos4] = useState({"a": "unused", "b": "unused", "c": "unused", "d": "unused", "e": "unused", "f": "unused", "g": "unused", "h": "unused", "i": "unused", "j": "unused", "k": "unused", "l": "unused", "m": "unused", "n": "unused", "o": "unused", "p": "unused", "q": "unused", "r": "unused", "s": "unused", "t": "unused", "u": "unused", "v": "unused", "w": "unused", "x": "unused", "y": "unused", "z": "unused"})
    const [pos5, setPos5] = useState({"a": "unused", "b": "unused", "c": "unused", "d": "unused", "e": "unused", "f": "unused", "g": "unused", "h": "unused", "i": "unused", "j": "unused", "k": "unused", "l": "unused", "m": "unused", "n": "unused", "o": "unused", "p": "unused", "q": "unused", "r": "unused", "s": "unused", "t": "unused", "u": "unused", "v": "unused", "w": "unused", "x": "unused", "y": "unused", "z": "unused"})

    // console.log(alphabet)
    const changePos = (letter, pos, update) => {
        if (pos[letter] === 'no') {
            pos[letter] = "maybe"
            // update the status of all letters
            // if that letter isn't a yes elsewhere, change it to from no to maybe
            if (alphabet[letter] !== "yes") {
                alphabet[letter] = "maybe"
            }
        } else if (pos[letter] === 'maybe') {
            pos[letter] = "yes"
            alphabet[letter] = "yes"
        } else if (pos[letter] === 'yes') {
            pos[letter] = "no"
            if (alphabet[letter] !== "yes" || alphabet[letter] !== "maybe") {
                alphabet[letter] = "unused"
            }
        } else if (pos[letter] === 'unused') {
            pos[letter] = "no"
            alphabet[letter] = "no"
        }
        update({...pos})
        console.log("updated")
        console.log(pos)
        // setAlphabet({...alphabet})
    }

    const hello = () => {
        console.log("hello ran")
    }

    const mappedGuesses = allGuesses.map((guess) =>
    <tr>
        <td className={pos1[guess[0]]} onClick={() => {changePos(guess[0], pos1, setPos1); hello()}}>{guess[0]}</td>
        <td className={pos2[guess[1]]} onClick={() => {changePos(guess[1], pos2, setPos2); hello()}}>{guess[1]}</td>
        <td className={pos3[guess[2]]} onClick={() => {changePos(guess[2], pos3, setPos3); hello()}}>{guess[2]}</td>
        <td className={pos4[guess[3]]} onClick={() => {changePos(guess[3], pos4, setPos4); hello()}}>{guess[3]}</td>
        <td className={pos5[guess[4]]} onClick={() => {changePos(guess[4], pos5, setPos5); hello()}}>{guess[4]}</td>
    </tr>
    )

  return (
    <div className="wordleContainer-wrapper">
        <Board guesses={mappedGuesses}/>
        <LetterList abc={alphabet} />
        <Options pos1={pos1} pos2={pos2} pos3={pos3} pos4={pos4} pos5={pos5} />
    </div>
  );
}

export default WordleContainer;
