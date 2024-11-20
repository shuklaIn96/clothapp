import React, { useState } from "react";

function InputValue() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value); // Log the actual input value
  };

  return (
    <>
      <div className="App">
        <h1>Show Data</h1>

        {/* Use onChange instead of onClick for capturing input */}
        <input type="text" onChange={handleChange} />
        
        {/* Display the input value */}
        <p>{inputValue}</p>
      </div>
    </>
  );
}

export default InputValue;


































// import "./App.css";
// import InputBoxValue from './components/inputboxvalue'; // Renamed to avoid conflict
// import React, { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [inputValueShow, setInputHide] = useState(false);

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <>
//       <div className="App">
//         <InputBoxValue />
//         <h1>{inputValueShow ? inputValue : ''}</h1>
//         <input type="text" onChange={handleChange} />
//         <button onClick={() => setInputHide(true)}>Submit</button>
//       </div>
//     </>
//   );
// }

// export default App;
