import React, { useState, useTransition, useEffect } from "react";

function UseTransition() {

    // Example 1
    // const [ispending, startTransition] = useTransition();
    // const [count, setconut] = useState(0);

    // useEffect
    // useEffect(() => {
    //     console.log("useSate run")
    // }, [count])

    // const HandelClick = () => {
    //     startTransition(() => {
    //         setconut(count + 1);
    //         console.log("Handel Run")
    //     })
    // }

    // EXample 2
    const [ispending, startTransition] = useTransition();
    const [input, setinput] = useState();
    const [dataList, setdataList] = useState([]);

    const DataSize = 100000;

    // Function
    const handleChange = (e) => {
        setinput(e.target.value);
    
        startTransition(() => {
            const a = [];
            for (let i = 0; i < DataSize; i++) {
                a.push(e.target.value);
            }
            setdataList(a);
        });
    };
    

    return (
        <>
            <h1>useTransition</h1>

            {/* Example 1 */}
            {/* <h2>Count{count}</h2>
            <button onClick={HandelClick}>Update Count</button > */}

            {/* Example2 */}
            <input type="text" value={input} onChange={handleChange} />
            {dataList.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </>
    );
}
export default UseTransition;












