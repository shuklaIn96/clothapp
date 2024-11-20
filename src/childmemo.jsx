import React,{memo} from "react";

function ChildMemo(props){

    console.log("child meno");
    return(
        <>
        <h1>Child Memo : {props.Count}</h1>
        </>
    );
}

export default memo(ChildMemo);