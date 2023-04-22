import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm({ onLogin }) {

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const providerTypeArray = ["Physician", "Physician Assistant", "Nurse Practitioner"]
  const [providerObject, setProviderObject] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    type_of_provider: "",
    department: ""   
  })
  const {username, password, password_confirmation, 
    first_name, middle_name, last_name, type_of_provider, department} = providerObject

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(providerObject),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          navigate('/')
        });
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  }

  function handleChange(event) {
    if (providerTypeArray.includes(event.target.value)){
      setProviderObject({...providerObject, type_of_provider: event.target.value})
    } else setProviderObject({...providerObject, [event.target.placeholder]:event.target.value})
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          placeholder="password_confirmation"
          value={password_confirmation}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          placeholder="first_name"
          value={first_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="middle_name">Middle Name</label>
        <input
          type="text"
          placeholder="middle_name"
          value={middle_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="last_name">Last (Family) Name</label>
        <input
          type="text"
          placeholder="last_name"
          value={last_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="type_of_provider">Type of Provider</label>
        <select placeholder="type_of_provider" value={type_of_provider} onChange={handleChange}>
          <option></option>
          <option>Physician</option>
          <option>Physician Assistant</option>
          <option>Nurse Practitioner</option>
        </select>
        <br />
        <label htmlFor="department">Department</label>
        <input
          type="text"
          placeholder="department"
          value={department}
          onChange={handleChange}
        />
        <br />

        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        {errors.map((err) => (<p key={err}>{err}</p>))}
    </form>
  );
}

export default SignUpForm;