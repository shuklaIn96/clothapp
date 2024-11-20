import React from "react";
import { useParams } from "react-router-dom";

// Mock Data
const UserData = {
    user: [
        { id: 1, Name: "User 1" },
        { id: 2, Name: "User 2" },
        { id: 3, Name: "User 3" },
    ],
};

function RouterUserData() {
    const { userID } = useParams(); // Make sure 'userId' matches the route param name
    const user = UserData.user.find((user) => user.id === parseInt(userID));
    return (
        <>
            <h1>User Profile Data</h1>
            {user ? (
                <div>
                    <h3>Name: {user.Name}</h3>
                    <p>ID: {user.id}</p>
                </div>
            ) : (
                <p>Data Not Found</p>
            )}
        </>
    );
}

export default RouterUserData;
