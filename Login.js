import { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "./components/firebaseConfig";
import "./Login.css";
function Login() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div className="form">
      <div>Currently logged in as: {currentUser?.email} </div>
      <div className="formulaire">
        <h3>Login Here</h3>
        <label>Email</label>
        <input ref={emailRef} placeholder="Email" />
        <label> password</label>
        <input ref={passwordRef} type="password" placeholder="Password" />
        <link To="/Netflix">
          <button
            className="btn"
            disabled={loading || currentUser}
            onClick={handleLogin}
          >
            Log In
          </button>
        </link>
        <br></br>
        <p>
          Already have an accout?{" "}
          <a href="http://localhost:3003/signup">sign up</a>
        </p>
      </div>
    </div>
  );
}
export default Login;
