import React, { useState } from "react";

function UserProfile() {
  // Declare multiple state variables
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);

  const updateProfile = () => {
    setName("Jane Doe");
    setAge(25);
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <button onClick={updateProfile}>Update Profile</button>
    </div>
  );
}

export default UserProfile;
