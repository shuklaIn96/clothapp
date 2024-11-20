import React,{useState} from "react";

function HigherOrderComponent(){

    const [count, setCount]= useState (0);

    // Higher Order components
    const withCounter = (WrappedComponent)=>{
        return function WithCounter(props){
            const [count, setCount] = useState(0);
            const increment =()=>{
                setCount(count+1);
            }
            return(
                   <WrappedComponent {...props} count={count} increment={increment}/>
            )
        }
    }

    // functional
    const Counter =({count,increment}) =>{
        return(
            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>increment</button>
            </div>
        )
    }

    // Wrap Counter Components with the WithCounter HOC
    const CounterWithEnhancement = withCounter(Counter);

    return(
        <>
        <div className="Appp">
            <h1>Higher Order Component</h1>
            

            {/* Example 1 */}
            {/* <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>btn</button> */}

            {/* Example 2 */}
            <CounterWithEnhancement />
        </div>
        </>
    );
}

export default HigherOrderComponent;