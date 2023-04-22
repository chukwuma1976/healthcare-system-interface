import React, { useState } from "react";
import LoginForm from "./LoginForm.js";
import SignUpForm from "./SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1>Healthcare System Interface</h1>
      {showLogin ? (
        <>      
          <h3>Please Log In</h3>
          <LoginForm onLogin={onLogin} />
          <br />
          <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <h3>Please Sign Up</h3>
          <SignUpForm onLogin={onLogin} />
          <br />
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;