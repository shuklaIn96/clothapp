import React, { useEffect, useState } from "react";
import UserTotal from "./UserTotal";

function UseEffectCondition() {

    // Example 2
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(100);

    useEffect(() => {
        console.log("after render count!!");
    }, [count]);
    
    useEffect(() => {
        console.log("after render Total!!");
    }, [total]);


    return (
        <>
            <div className="App">
                <h1>Use Effrect Condition</h1>
                <UserTotal count={count} total={total}/>

                {/* <h1>Count : {count}</h1> */}
                <button onClick={()=>setCount(count +1 )}>update Count</button>


                {/* <h1>Total : {total}</h1> */}
                <button onClick={()=>setTotal(total +1 )}>update Total</button>
            </div>
        </>
    );
}

export default UseEffectCondition;