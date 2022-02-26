import { isCompositeComponent } from 'react-dom/test-utils';
import '../App.css';

function Guess({ assignGuess }) {

    // add to guess string onchange
    let guess = ""
    const handleChange = (e) => { guess = e }

    // send to parent once we submit
    const handleSubmit = (e) => {
        e.preventDefault();
        assignGuess(guess)
        // TODO: reset input field
    }

  return (
    <div className="guess-wrapper">
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Guess</label>
                <input maxLength="5" minLength="5" type='text' onChange={e => handleChange(e.target.value)} placeholder="Enter your budget" />
                <input type="submit" value="Guess" />
            </div>
        </form>
    </div>
  );
}

export default Guess;
