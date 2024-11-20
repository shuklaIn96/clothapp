import React from "react";

function ChildComponentB({shareState, alert}){

    // Example 2
    const data ="Sagar Shukla Front End Developer";
    return(
        <>
        <div>
            <h1>Share State: {shareState}</h1>
            <button onClick={()=>alert(data)}>Click Me</button>
        </div>
        </>
    );
}
export default ChildComponentB;