import '../App.scss';

function LetterList({ abc }) {

  return (
    <div className="letterlist-wrapper">
        {Object.entries(abc).map(([k,v]) => {
            return (
                <span className={v}>{k}</span>
            )
        })}
    </div>
  );
}

export default LetterList;
