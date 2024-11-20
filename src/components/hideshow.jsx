import React, { useState } from "react";

function HideShow() {

    const [status, setStatus] = useState("true");

    // const ShowHide = () => {
    // }

    return (
        <>
            <div className="App">
                <h1>Hide Show & Toggle</h1>

                {status ?  <div className="status">Content</div> : null}  

                {/* example 1 */}
                <button onClick={()=>setStatus(true)}>Show</button>
                <button onClick={()=>setStatus(false)}>Hide</button>

                {/* example 2 */}
                <button onClick={()=>setStatus(!status)}>Toggle</button>

            </div>
        </>
    );
}

export default HideShow;