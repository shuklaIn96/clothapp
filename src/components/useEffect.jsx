import React, { useEffect, useState } from "react";

function UseEffect() {

    // Example 2
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount (count + 1);
    }

    // Example 1
    useEffect(() => {
        // alert("Hello Sagar");
        console.log("Hello Vipin");
    }
    );

    return (
        <>
            <div className="App">
                <h1>Use Effect Hooks</h1>

                {/* Example 2 */}
                <h2>Count: {count}</h2>
                <button onClick={increment}>Click</button>
            </div>
        </>
    );
}

export default UseEffect;