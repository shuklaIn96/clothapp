import React, { useEffect } from "react";

function UserTotal(props) {

    useEffect(() => {
        console.log("called with props!");
    });

    useEffect(() => {
        console.log("count is", props.count);
    },[props.count, props.total]);


    return (
        <>
            <div className="App">
                <h1>Count : {props.count}</h1>
                <h1>Total : {props.total}</h1>
            </div>
        </>
    );
}

export default UserTotal;