import React,{useRef, useState} from "react";


function ReactUncontrolledComponent(){

    let inputRef = useRef(null);
    let inputRef2 = useRef(null);

    const submitForm = (e) =>{
        e.preventDefault();
        console.log("First input Value", inputRef.current.value);
        console.log("Second input Value", inputRef2.current.value);
    }
    return(
        <>
        <h1>React Uncontrolled Component</h1>

        <form onSubmit={submitForm}>
            <input type="text" ref={inputRef}/>
            <input type="text" ref={inputRef2}/>
            <button>Submit</button>
        </form>

        {/* <form onSubmit={submitForm}>
        <input type="text" ref={inputRef} />
        <input type="text" ref={inputRef2} />
        <button type="submit">Submit</button>
      </form> */}

        </>
    );
}

export default ReactUncontrolledComponent;