import React from "react";

function ChildComponentA({shareState, handleChange}) {

    // Example 1
    const handelInputChange = (event) =>{
        const newValue = event.target.value;
        handleChange(newValue);
    }
    return (
        <>
            <h1>Child Components</h1>
            {/* <h2>Tell You Name {props.data}</h2> */}

            <input type="text" value={shareState} onChange={handelInputChange}/>
        </>
    );
}


export default ChildComponentA;