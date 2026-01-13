import "./Autocounter.css"
import { useState } from 'react';

function Autocounter ({ name }) {
    const [count, setCount] = useState(0);

    const subtract = (event) => {
        event.preventDefault();
        setCount(count => {
            if (count > 0) {
                return count - 1;
            }
            return count
        });
    };

    const add = (event) => {
        event.preventDefault();
        setCount(count + 1);
    };

    return (
        <div className="child text">
            <p id="autocounttext" className="text">{name}</p>
            <button onClick={subtract} className="text" id="remove">-</button>
            <button onClick={add} className="text" id="addto">{count}</button>
        </div>
    )
}

export default Autocounter;