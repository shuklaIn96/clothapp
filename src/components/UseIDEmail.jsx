import React,{useId} from "react";

function UseIdEmail(){

    // const id = Math.random();

    const id = useId();
    // const id1 = useId();

    return(
        <>
        <label htmlFor={`${id}-Email`}>Email</label> 
        <input type="text" id={`${id}-Email`} autoComplete="off"/>
        <br />
        <br />
        <label htmlFor={`${id}-name`}>Name</label>
        <input type="text" id={`${id}-name`} autoComplete="off"/>
        </>
    );
}

export default UseIdEmail;