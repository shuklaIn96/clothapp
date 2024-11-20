    import React,{useState, useRef, useLayoutEffect} from "react";

    function UseLayoutEffect(){

        const [width, setWith] = useState (0);
        const ElementRef = useRef (null);
        // console.log(ElementRef);

        useLayoutEffect(()=>{
            if(ElementRef.current){
                setWith(ElementRef.current.getBoundingClientRect().width)
            }
        },[])
        
        return(
            <>
            <div className="App">
            <h1>Use Layout Effect</h1>

            <div>
                <h2> width Measurement  </h2>
                <div ref={ElementRef} style={{width:"1200px",background:"yellow",margin:"auto,"}}>Element whose With is Mesurement</div>
            </div>
            <p>Width:{width}px</p>
            </div>
            </>
        );
    }

    export default UseLayoutEffect;