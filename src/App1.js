import logo from './logo.svg';
import './App.css';
import Counter from './components/click';
import UseState from './components/usestate';
import CounterNew from './components/counternew';
import Counterforclass from './components/counterforclass';
import SetState from './components/setstate';
import UserCard from './components/usercard';
// import React,{useState} from 'react';
function App() {


  // Example 3
  // const [name, setName] = useState("vpin shukla");
  
  
  // Example 2
  // const username = [
  //   { name: 'sagar shukla', age: '25', email: 'sagarshukla1@gmail.com' },
  //   { name: 'sagar shukla2', age: '26', email: 'sagarshukla2@gmail.com' },
  //   { name: 'sagar shukla3', age: '27', email: 'sagarshukla3@gmail.com' },
  // ];

  return (
    <>
      <div className="App">
        {/* <Counter />  
        <UseState />
        <CounterNew />
        <Counterforclass />
        <SetState /> */}

        {/* Example 1 */}
        {/* <UserCard name="sagar shukla" /> */}

        {/* Example 2 */}
        {/* {
          username.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              age={user.age}
              email={user.email}
            />
          ))
        } */}

        {/* Example 3 */}
        {/* <button>update props</button> */}

        {/* <userCard name={name} /> */}

        {/* example 3 */}
        {/* <button onClick={() => setName("sagar pandit")}>Update props</button> */}
      </div>
    </>
  );
}

export default App;



