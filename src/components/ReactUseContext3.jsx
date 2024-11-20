import React,{useContext} from "react";
import { MyContext } from "./reactuseContext1";

function ReactUseContext3(){

    const shareData = useContext(MyContext);
    console.log(shareData);
return(
    <>
    <h1>React Use Context 3</h1>
    </>
);
}

export default ReactUseContext3;