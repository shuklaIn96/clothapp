import React, {memo} from "react";

function UseCallBackChild({increment}){
    console.log("UseCallBackChild");
    return(
        <>
        <div className="App">
            <button onClick={increment}>Use callBack Child</button>
        </div>
        </>
    );
}

export default memo(UseCallBackChild);