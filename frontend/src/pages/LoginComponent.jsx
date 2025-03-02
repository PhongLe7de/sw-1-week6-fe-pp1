import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useLogin} from '../hooks/loginHook'

const LoginComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {login} = useLogin()

  const handleLogin = async () => {
      await login({ email, password, setIsAuthenticated, navigate })
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
