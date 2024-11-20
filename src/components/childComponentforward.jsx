import React,{forwardRef, useRef, useImperativeHandle} from "react";

function ChildComponentForward(props, ref){


    const childRef =useRef();

    const handleChildButtonClick=()=>{
        console.log("child button clicked");
    }

    useImperativeHandle(ref,()=>({
        handleChildButtonClick,
    }));

    return(
        <>
        <p>Child Components Forward</p>

        {/* Example 1 */}
        <input type="text" ref={ref}/>

        {/* Example 2 */}
        <button ref={childRef}>Click on</button>
        </>
    );
}

export default forwardRef(ChildComponentForward);