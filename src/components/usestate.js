import React,{useState} from "react";
// import React from "react";  // Import React to use JSX

function UseState(){
    // example 1
    let [data, setdata] = useState("EM Developmet");

    const updatedata = () =>{
        setdata("vipin shukla")
        alert(data);
    }

    console.log("render-----");

    return(
        <>
        <div className="App">
        <h1>{data}</h1>
        <button onClick={updatedata}>Update Value</button>
        </div>
      </>
    );
}

export default UseState; 

