import React, { Component, createRef } from "react";

class Ref extends Component {
  constructor() {
    super();
    this.myinputRef = createRef();
  }

//   Example 1
//   componentDidMount(){
//     this.myinputRef.current.value = "sagar shukla";
//     console.log(this.myinputRef.current.value);
//   }

//   Example 2
handleClick =()=>{
    this.myinputRef.current.focus();
    this.myinputRef.current.style.background ="green";
    this.myinputRef.current.style.color ="white"; 
    console.log(this.myinputRef.current.value);
}

  render() {
    // console.log(this.myinputRef); // This will log the ref object

    return (
      <>
        <div className="App">
          <h1>Ref In React.</h1>

          {/* Example 1 */}
          <input type="text" ref={this.myinputRef} />
          <button onClick={this.handleClick}>Foucs Input</button>
        </div>
      </>
    );
  }
}

export default Ref;
