import React from "react";

function PassFunctionProps(Props){
    // console.log(Props)
    return(
        <>
        <div className="App">
            <h1>Pass Function Props</h1>

            {/* Example 1 */}
            <button onClick={Props.handleClick}>Click me</button>

            {/* Example 2 */}
            <p>Count: {Props.count}</p>
            <button onClick={Props.increment}>Increment</button>
        </div>
        </>
    );
}

export default PassFunctionProps;