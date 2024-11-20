import React, { createContext } from "react";
import ReactUseContext2 from "./ReactUseContext2";
import ReactUseContext3 from "./ReactUseContext3";


// create, provider, useContext

const MyContext = createContext();

function ReactUseContext1(){

    const ShareData ="Hello Data parent !!";

return(
    <>
    <MyContext.Provider value={ShareData}>
    <h1>Use Context Hook</h1>
    <h1>React Use Context 1</h1>
    <ReactUseContext2/>
    <ReactUseContext3/>
    </MyContext.Provider>
    </>
);
}

export default ReactUseContext1;

export {MyContext};