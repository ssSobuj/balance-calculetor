import { useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  const naviget = useNavigate();

  const handleGoSingup = () => {
    naviget("/singup");
  };

  return (
    <>
      <div className="login-container">
        <h2 className="title">Login</h2>
        <form className="login-form">
          <label htmlFor="username">Username:</label>
          <input
            required
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />

          <label htmlFor="password">Password:</label>
          <input
            required
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />

          <div className="login-btn-div">
            <button type="submit">Login</button>
            <button onClick={handleGoSingup}>Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
}
