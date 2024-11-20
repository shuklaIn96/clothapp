import React,{useState} from "react";


function ReactControlledComponent(){

    // Example 1
    const [inputValue, setinputValue] = useState("");
    

    const handleChange =(event)=>{
        setinputValue(event.target.value);
        console.log(event.target.value);
    }

    return(
        <>
        <h1>React Controlled Component</h1>
        <input type="text" value={inputValue} onChange={handleChange}/>
        <p>Data: {inputValue}</p>
        </>
    );
}

export default ReactControlledComponent;




