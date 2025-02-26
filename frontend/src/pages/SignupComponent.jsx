import { useState } from "react";
import { useSignUp } from "../hooks/signupHook";
import { useNavigate } from "react-router-dom";
const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();
  const {signup} = useSignUp()

  const validation = (password, password2) => {
      if(password === password2){
        return true
      } else {
        false
      }
  }
  const handleSignUp = async () => {
    if(!validation){
      console.log('Password not correct')
      return
    }
    await signup({ email, password, password2, setIsAuthenticated, navigate });
  };



  return (
    <div className="form-container">
      <h2>Signup</h2>
      <label>
        email:
        <input
          placeholder="Your Email"
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
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
      Confirm password:
        <input
          type="password"
          value={password2}
          placeholder="Confirm your password"

          onChange={(e) => setPassword2(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
