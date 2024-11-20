import React, { useState } from "react";

function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const ValidateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ValidateForm()) {
      const submittedData = {
        name,
        email,
        password,
      };
      setSubmittedData(submittedData);
      console.log("Form Submitted", submittedData);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Form Validation</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type="submit">Submit</button>

          {submittedData && (
            <div>
              <h2>Submitted Data:</h2>
              <p>Name: {submittedData.name}</p>
              <p>Email: {submittedData.email}</p>
              <p>Password: {submittedData.password}</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default FormValidation;
