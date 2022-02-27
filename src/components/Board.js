import '../App.scss';

function Board({ guesses }) {
  return (
    <div className="board-wrapper">
        {guesses}
    </div>
  );
}

export default Board;
