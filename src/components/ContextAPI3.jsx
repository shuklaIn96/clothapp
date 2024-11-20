import React from "react";
import { MyContext } from "./ContextAPI";
function ContextAPI3() {
    return (
        <>
            <h1>Context API 3</h1>
            <MyContext.Consumer>
                {
                    (shareData) => {
                        return <p>{shareData}</p>
                    }
                }
            </MyContext.Consumer>
        </>
    );
}

export default ContextAPI3;