import React,{useState,useCallback} from "react";
import UseCallBackChild from "./UseCallbackChild";

function UseCallback(){

    // Example 1
    const[count, setCount] = useState(0);
    console.log("UseCallback");

    // Example 2
    const[count2, setCount2] = useState(0);
    const increment = useCallback (()=>{
        setCount2((prevCount) => prevCount + 1);
        console.log("usecallback Hook");
    },[]);

    return(
        <>
        <div className="App">
            <h1>Use Call Back</h1>

            {/* Example 1 */}
            <p>Count1 : {count}</p>
            <button onClick={()=>setCount(count+1)}>Click</ button>
            <br/>
            <br/>

            {/* Example 2 */}
            <p>Count2 : {count2}</p>
            <UseCallBackChild increment={increment} />
        </div>
        </>
    );
}

export default UseCallback;
