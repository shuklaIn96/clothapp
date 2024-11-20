// import React, { useState, useMemo } from "react";

// function UseMemoExample() {

//     // Example 1: Two number inputs
//     const [number1, setNumber1] = useState(0);
//     const [number2, setNumber2] = useState(0);
//     const [count, setCount] = useState(0);

//     // Memoized sum calculation - it recalculates only when `number1` or `number2` changes
//     const sum = useMemo(() => {
//         console.log("calculating sum...!");
//         return number1 + number2;
//     }, [number1, number2]);

//     return (
//         <>
//             <h1>UseMemo in React</h1>

//             {/* Input fields */}
//             <div className="Appp">
//                 <input
//                     type="number"
//                     value={number1}
//                     onChange={(e) => setNumber1(Number(e.target.value))}
//                 />

//                 <input
//                     type="number"
//                     value={number2}
//                     onChange={(e) => setNumber2(Number(e.target.value))}
//                 />

//                 {/* Example with useMemo */}
//                 <p>Sum: {sum}</p>

//                 {/* Example without useMemo */}
//                 <h2>Count Number: {count}</h2>
//                 <button onClick={() => setCount(count + 1)}>click ++</button>
//             </div>
//         </>
//     );
// }

// export default UseMemoExample;
