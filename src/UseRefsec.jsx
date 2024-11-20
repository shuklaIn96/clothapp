// import React, {useRef} from "react";

// function UseRef() {

//     // Example 1
//     const inputRef = useRef(null);

//     // Example 2
//     const handelButtonClick = () =>{
//         const inputValue = inputRef.cureent.value;
//         alert(`Input value: ${inputValue}`);
//     }

//     return(
//         <>
//         <div className="App">
//             <h1>UseRef in React</h1>

//             {/* Example 1 */}
//             <input type="text" ref={inputRef}/>
//             <button onClick={handelButtonClick}>Click</button>
//         </div>
//         </>
//     );
// }

// export default UseRef;


import React, { useRef } from "react";

function UseRefExample() {

    // Example 1
    const inputRef = useRef(null); // Correct hook usage

    // Example 2
    const handleButtonClick = () => {
        const inputValue = inputRef.current.value; // Accessing the input value
        alert(`Input value: ${inputValue}`);
        console.log(`Input value: ${inputValue}`);
    };

    return (
        <>
            <div className="App">
                <h1>useRef in React</h1>

                {/* Example 1 */}
                <input type="text" ref={inputRef} />
                <button onClick={handleButtonClick}>Click</button>
            </div>
        </>
    );
}

export default UseRefExample;
