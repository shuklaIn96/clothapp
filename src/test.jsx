// // import logo from './logo.svg';
// import React,{Component} from 'react';
// import './App.css';
// import UserList from './UserList'
// // import User from './User';

// class Test extends Component{
//   constructor(){
//     super();
//     this.state = {
//       name:"Mukesh Nirmal",
//       email:"mukeshnirmal74@gmail.com",
//     }
//   }

//   const data =()=>{
//     this.setState{name:"Muneesh Nirmal", email:"muneesgnirmal"};
//   }

//   render(){
//     return (
//       <>
//       <div className="App">
//         <h1>Props in React</h1>
//         {/* <UserList name = "Muneesh Nirmal" email="muneeshnirmal74@gmail.com" /> */}

//         {/* Example 2 */}
//         <UserList name = {this.state.name} email={this.state.email} />
//         <button onClick = {data}>Update Props</button>

        
//       </div>
//       </>
//     );
//   }
  
// }

// export default Test;



// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
// import User from './User';

class Test extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mukesh Nirmal",
      email: "mukeshnirmal74@gmail.com",
    };
  }

  data = () => {
    this.setState({ 
      name: "Muneesh Nirmal", 
      email: "muneeshnirmal@gmail.com" 
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Props in React</h1>
          
          {/* Example 2 */}
          <UserList name={this.state.name} email={this.state.email} />
          
          <button onClick={this.data}>Update Props</button>
        </div>
      </>
    );
  }
}

export default Test;
