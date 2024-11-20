import React from 'react';

function Counter() {
   
  let data = "Welcome To EM";

  const demo = () => {
    data = "bhaskar gupta";
    alert(data);
  }

  return (
    <>
    <h1>{data}</h1>
    <button onClick={demo}>Next</button>
    {/* <button onClick={()=> alert("vpin shukla")} >Next</button> */}
    </>
  );
}

export default Counter;

