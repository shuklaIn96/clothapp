import React, {useState} from "react";
import ChildMemo from "./childmemo";

function ParentMemo(){

    // Example 1
    const [Count, setCount] = useState(0);
    console.log("Parent Log");

    return(
        <>
        <h1>Parent Memo</h1>
        <h2>Count : {Count}</h2>
        <button onClick={()=>setCount(Count + 1)}>Increment</button>

        <ChildMemo Count ={Count}/>
        </>
    );
}

export default ParentMemo;