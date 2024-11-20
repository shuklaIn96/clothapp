import React,{useState} from "react";

function CounterNew(){

    const [count, setCount] = useState (0);

    const increment = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>count : {count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
}

export default CounterNew;

