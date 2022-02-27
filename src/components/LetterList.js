import '../App.scss';

function LetterList({ abc }) {

  return (
    <div className="letterlist-wrapper">
        <div>
        {Object.entries(abc).map(([k,v]) => {
            return (
                <span className={v}>{k}</span>
            )
        })}
        </div>
    </div>
  );
}

export default LetterList;
