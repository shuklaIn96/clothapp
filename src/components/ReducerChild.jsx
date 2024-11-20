import { type } from "@testing-library/user-event/dist/type";
import React,{useReducer} from "react";

function ReducerChild(){

    // Reducer Function
    const reducer = (state, action) =>{
        console.log(state, action);

        switch(action.type){
            case"increment":
            return{count: state.count+1};
            case"Decrement":
            return{count: state.count-1};
            
            default:
                return state;
        }
 
    }


    // Example 1
    const initialState = {count:0}; 
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
        <h1>Reducer Child</h1>
        <p>Count:{state.count}</p>
        <button onClick={()=>dispatch({type:"increment"})}>increment Btn</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement Btn</button>
        </>
    );
}

export default ReducerChild;