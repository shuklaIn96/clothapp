import React from "react";

function ReusableList({items}) {
    return (
        <>
            <div className="App">
                <h1>Resuable List</h1>
                <ul>
                    {items.map((items, index) => (
                        <li key={index}>{items}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ReusableList;


