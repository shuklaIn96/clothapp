import React, { Component } from "react"

class RendorMethod extends Component{
    
    // Example 3
    constructor(){
        super();
        this.state ={
            email: "sagar@gmail.com",
        };
    }

    render(){

        // Example 1
        // console.log("render Method !!", this.props);

        // Example 3
        console.log("Render Method!!", this.state.email);

        return(
        <>
            <div className="App">

                {/* <h1>Render Method!! {this.props.name}</h1> */}

                {/* Example 3 */}
                <h2>Render Method {this.state.email}</h2>

                <button onClick={()=>this.setState({email:"Test@gmail.com"})}>
                 Update State
                </button>
            </div>
        </>
        );
    }
}

export default RendorMethod;