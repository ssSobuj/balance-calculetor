import { useEffect } from "react";
import "./singup.css";
import { useNavigate } from "react-router-dom";
export default function Sinup() {
  useEffect(() => {
    document.title = "Sinup";
  });

  const naviget = useNavigate();

  const goBackToHome = () => {
    naviget('/');
  };
  return (
    <>
      <div className="signup-container">
        <h2 className="title">Sign Up</h2>
        <form className="signup-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            required
            id="username"
            name="username"
            placeholder="Enter your username"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            name="email"
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            name="password"
            placeholder="Enter your password"
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm your password"
          />

          <button type="submit">Sign Up</button>
        </form>

        <div className="goback">
          <button onClick={goBackToHome}>go back to home</button>
        </div>
      </div>
    </>
  );
}
