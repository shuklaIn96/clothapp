import React from "react";
import { Link } from "react-router-dom";
import RouterUserData from "./RouterUserData";

// Mock Data
const UserData = {
    user:[
        { id:1, Name:"User 1"},
        { id:2, Name:"User 2"},
        { id:3, Name:"User 3"},
    ],
};

function RouterUser(){
    return(
        <>
        <h1>User Data</h1>
        <ul>
           {
            UserData.user.map((user)=>(
                <li key={user.id}>
                    <Link to={`/RouterUserData/${user.id}`} >{user.Name}</Link>
                </li>
            ))
            }
        </ul>
        <RouterUserData/>
        </>
    );
}
export default RouterUser;