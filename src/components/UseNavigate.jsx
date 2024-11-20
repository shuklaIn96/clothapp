import React from "react";
import { useNavigate } from "react-router-dom";

function UseNavigate(){

    // Example 1
    const navigate = useNavigate();

    // Example 2
    const handleDynamicNavigate = (targetRoute) =>{
        navigate(targetRoute);
        console.log(targetRoute);
    }

    // Example 3
    const handleConditionalNavigate = (shouldNavigate) =>{
        if(shouldNavigate){
            navigate("/RouterAbout");
        }
        else{
            navigate("/RouterService");
        }
    }

    return(
        <>
        <h1>useNavigate</h1>

        {/* // Example 1 */}
        {/* <button onClick={()=>navigate("/RouterAbout")}>Go To About Page</button>
        <button onClick={()=>navigate("/RouterService")}>Go To Service Page</button> */}

        {/* // Example 2 */}
        {/* <button onClick={()=>handleDynamicNavigate("/RouterAbout")}>Go To About Page</button>
        <button onClick={()=>handleDynamicNavigate("/RouterService")}>Go To Service Page</button> */}

        {/* // Example 3 */}
        <button onClick={()=>handleConditionalNavigate("true")}>Go To About Page</button>
        <button onClick={()=>handleConditionalNavigate("false")}>Go To Service Page</button>

        </>
    );
}

export default UseNavigate;