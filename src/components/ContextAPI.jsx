import React,{createContext} from "react";
import ContextAPI2 from "./ContextAPI2";

// Create, Provider, Consumer
const MyContext = createContext();


function ContextAPI(){

    const shareData = "Hello For Parent";

    return(
        <>
        <MyContext.Provider value={shareData}>
        <h1>Context API 1</h1>
        <ContextAPI2/>
        </MyContext.Provider>
        </>
    );
}

export default ContextAPI;
export { MyContext };
