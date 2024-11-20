import React,{useState} from "react";
import ReducerChild from "./ReducerChild";

function UseReducer(){

    const[count,setCount] = useState(0);

    return(
        <>
        <h1>useReducer</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>increment Btn</button>
        <button onClick={()=>setCount(count-1)}>Decrement Btn</button>


        <ReducerChild/>
        </>
    );
}

export default UseReducer;