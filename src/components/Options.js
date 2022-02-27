import '../App.scss';

function Options({ pos1, pos2, pos3, pos4, pos5 }) {

    // console.log(props.pos1)
    // const all = props.map(arr => console.log(props.arr))
    // console.log(all)
    // for (const [key, value] of Object.entries(props[1])) {
    //     console.log(`${key}: ${value}`);
    //   }
  return (
    <div className="options-wrapper">
        <div>
            <span class="finalLetter">{Object.keys(pos1).find(key => pos1[key] === "yes")}</span>
            {Object.entries(pos1).map(([k,v]) => {
                return ( <span className={v}>{k}</span> )
            })}
        </div>
        <div>
            <span class="finalLetter">{Object.keys(pos1).find(key => pos2[key] === "yes")}</span>
            {Object.entries(pos2).map(([k,v]) => {
                return ( <span className={v}>{k}</span> )
            })}
        </div>
        <div>
            <span class="finalLetter">{Object.keys(pos1).find(key => pos3[key] === "yes")}</span>
                {Object.entries(pos3).map(([k,v]) => {
                return ( <span className={v}>{k}</span> )
            })}
        </div>
        <div>
        <span class="finalLetter">{Object.keys(pos1).find(key => pos4[key] === "yes")}</span>
            {Object.entries(pos4).map(([k,v]) => {
                return ( <span className={v}>{k}</span> )
            })}
        </div>
        <div>
        <span class="finalLetter">{Object.keys(pos1).find(key => pos5[key] === "yes")}</span>
            {Object.entries(pos5).map(([k,v]) => {
                return ( <span className={v}>{k}</span> )
            })}
        </div>
    </div>
  );
}

export default Options;
