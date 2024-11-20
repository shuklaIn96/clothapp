import React from "react";
import "./style.css";
// import style from "./Style.Module.css";
import "./style.scss";


const handleline ={
    color: "#fff",
    background: "blue",
}

function Style(){
    return(
        <>
        <h1>Style Type in React</h1>
        {/* inline css */}
        <h1 style={{color:"#fff", background:"green"}}>Sagar Shukla</h1>
        {/* normal css */}
        <h1 className="primary">Sagar Shukla</h1>
        {/* css in js */}
        <h1 style={handleline}>Sagar Shukla</h1>
        {/* module css */}
        {/* <h1 className={Style.title}>Sagar Shukla</h1> */}
        {/* module scss */}
        <h1 className="primary-scss">Sagar <span>Shukla</span></h1>
        </>
    );
}
export default Style;