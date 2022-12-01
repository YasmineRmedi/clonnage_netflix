import { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "./components/firebaseConfig";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    // try {
    await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
    // alert("Error!");
    // }
    setLoading(false);
  }

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
        <h3>Sign up Here</h3>
        <label>Email</label>
        <input ref={emailRef} placeholder="Email" />
        <label> password</label>
        <input ref={passwordRef} type="password" placeholder="Password" />

        <button
          className="btn"
          disabled={loading || currentUser}
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <button disabled={loading || currentUser} onClick={handleLogin}>
          Log In
        </button>
        <button disabled={loading || !currentUser} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
