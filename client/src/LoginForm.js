import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
    
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          navigate('/')
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    }
        
  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
          <label>username</label>
          <input 
            type="text" 
            placeholder="enter username" 
            autoComplete="off"
            value={username}
            onChange={(e)=>setUsername(e.target.value)} 
          />
          <br/>
          <label>password</label>
            <input 
            type="password" 
            placeholder="enter password" 
            autoComplete="current-password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            />
          <br/>
          <button type="submit">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <p>
          {errors}          
        </p>
      </div>
  )
}

export default LoginForm