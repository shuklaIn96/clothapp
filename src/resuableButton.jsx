import React from "react";

function ResuableButton({text, onClick}){
    return(
        <>
        <div className="App">
            <h1> Reusable Components</h1>
            <button onClick={onClick}>{text}</button>
        </div>
        </>
    );
}

export default ResuableButton;