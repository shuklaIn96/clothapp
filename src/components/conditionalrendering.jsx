import React from "react";

export default function ConditionalRendering() {

    // Example 1
    const isloggin = true;
    
    // Example 2
    const items = ["1", "2", "3"];

    return (
        <>

        {/* Example 1 */}
        <div className="App">
            {isloggin ? <h1>1</h1> : <h1>2</h1>};

        </div>

        </>
    );
}















































//     // Example 1
//     const isloggedIn = false;

//     {/* Example 2 */ }
//     const items = ["Apple", "Banana", "orange"];

//     // Example 3
//     const isAuthenticated = true;

//     return (
//         <>
//             <div className="App">

//                 {/* Example 1 */}
//                 {isloggedIn ? <h1>Welcome User</h1> : <h1>Welcome Guest</h1>}

//                 {/* Example 2 */}
//                 <div>
//                     {items.length > 0 ? (
//                         <ul>
//                             {
//                                 items.map((items, index) => (
//                                     <li key={index}> {items} </li>
//                                 ))
//                             }
//                         </ul>
//                     ) : (
//                         <h1>No Items to Display</h1>
//                     )}
//                 </div>


//                 {/*  Example 3 */}
//                 {isAuthenticated && (
//                     <button onClick={()=> console.log("Loged Out")}>Log Out</button>
//                 )}

//             </div>
//         </>
//     );
// }

// export default ConditionalRendering;
