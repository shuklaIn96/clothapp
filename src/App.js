import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouterHome from './components/RouterHome';
import RouterAbout from './components/RouterAbout';
import RouterService from './components/RouterService';
import RouterMenu from './components/RouterMenu';
import NotFound from './components/NotFound';
import RouterUser from './components/RouterUser';
import RouterUserData from './components/RouterUserData';
import UseNavigate from './components/UseNavigate';
import FetchAPI from './components/FetchAPI';
import APIPostMethod from './components/APIPostMethod';
import APIPutMethod from './components/APIPutMethod';
import FetchDelete from './components/FetchDelete';


// import { Route, Router, Routes } from 'react-router-dom';
// import Router1 from './components/router1';
// import UseIdHook from './components/UseIdHook';
// import Test from './test';
// import ContextAPI from './components/ContextAPI';
// import UseLayoutEffect from './useLayoutEffect';
// import HigherOrderComponent from './HigherOrderComponent';
// import ReactControlledComponent from './Reactcontrolledcomponent';
// import ReactUncontrolledComponent from './ReactUncontrolledComponent';
// import UseRef from './UseRefsec';
// import forwardReg from './components/forwardRef';
// import ForwardReg from './components/ForwardRef';
// import ForwardReg from './components/ForwardRef'; 
// import forwardReg from './forwardReg';
// import ChildComponentA from './ChildComponentA';
// import ChildComponentB from './ChildComponentB';
// import ParentMemo from './ParentMemo';
// import useMemo from './UseMemo';
// import UseMemo from './UseMemos';
// import UseMemos from './UseMemos';
// import Ref from './Ref';
// import Ref from '../UseRef';
// import forwardRef from './forwardRef';
// import Forwardref1 from './components/forwardref1';
// import Usecallback from './components/useCallback';
// import Usecallback from './components/useCallback';
// import Usecallback from './components/useCallback';
// import UseReducer from './components/useReducer';
// import ReactUseContext1 from './components/reactuseContext1';
// import UseReducer from './components/useReducer';
// import UseTransition from './components/usetransition';
// import FormHandling from './components/formhanding';


function App() {
  // // Example 1: Button click
  // const handelButtonClick = () => {
  //   console.log("check code");
  // };

  // // Example 2: Array for list
  // const Vagitable = ["Apple", "Banana", "Orange"];

  // // Example 3: Initial state
  // const data = "Sagar Shukla";

  // // Example 4: State for shared input
  // const [shareState, setShareState] = useState("");

  // const handleChange = (newValue) => {
  //   console.log(newValue);
  //   setShareState(newValue);
  // };

  // // Example 5
  // const parentAlert =(data)=>{
  //   alert(data);
  // }
  return (
    <>
      <div className="App">
        {/* <Ref/> */}
        {/* <UseRef/>  */}
        {/* <UseRef/> */}
        {/* <Forwardref1/> */}
        {/* <ReactControlledComponent /> */}
        {/* <ReactUncontrolledComponent /> */}
        {/* <HigherOrderComponent /> */}
        {/* <Usecallback /> */}
        {/* <UseReducer /> */}
        {/* <ReactUseContext1/> */}
        {/* <ContextAPI /> */}
        {/* <UseLayoutEffect /> */}
        {/* <Test/> */}
        {/* <FormHandling/> */}
        {/* <UseTransition/> */}
        {/* <UseIdHook/> */}


        {/* <BrowserRouter> */}
        {/* <h1>Hello React Router V6</h1> */}
        {/* <RouterMenu/>
        <Routes> 
          <Route path="/" element={<RouterHome/>}/>
          <Route path="/RouterAbout" element={<RouterAbout/>}/>
          <Route path="/RouterService" element={<RouterService/>}/>
          <Route path="/RouterUser" element={<RouterUser/>}/>
          <Route path="/RouterUserData/:userID" element={<RouterUserData/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <UseNavigate/> */}

        {/* <FetchAPI /> */}
        {/* <APIPostMethod/> */}
        {/* <APIPutMethod/> */}

        {/* <FetchDelete/> */}
      </div>
    </>
  );
}

export default App;
