import React,{useRef} from "react";
import ChildComponentForward from "./childComponentforward";

function ForwardRef1(){

    // Example 1
    const inputRef = useRef(null);

    const updateinput =() =>{
        inputRef.current.value = "1000";
        inputRef.current.focus();
        // inputRef.current.style.color = "white";
        // inputRef.current.style.background = "green";
    }

    // EXample 2
    const childRef = useRef();

    const useImperativeHandle = ()=>{
        if(childRef.current){
            childRef.current.handleChildButtonClick();
        }
    }

    return(
    <>
    <div className="App">
    <h1>forwardRef in React</h1>
    <ChildComponentForward ref={inputRef}/>
    {/* Example 1 */}
    <button onClick={updateinput}>Click</button>
    {/* Example 2 */}
    <button onClick={useImperativeHandle}>Click</button>
    </div>
    </>
    );
}

export default ForwardRef1;