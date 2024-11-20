import React, { Component } from "react";

class Counterforclass extends Component{


    constructor(){
        super();

        this.state ={
            data: "Sagar Shukla",
            // this.setState({
            //     data:"vipin shukla",
            // });

              
        }
    }

    demo(){
        // alert("class components");
        
        this.setState({
            data: "vipin shukla"
          });
    }

    render(){
        console.log(this.state.data);
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={() => this.demo()}>hello</button>
            </>
        )
    };
}

export default Counterforclass;