import { useEffect } from "react";

import "./home.css";
import { Link } from "react-router-dom";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      <div className="home-header">
        <h1 className="title">Balance Calculator</h1>
      </div>
      <div className="home-container">
        <h2 className="title">Welcome to our Balance Calculator</h2>
        <p className="description">
          Easily manage your finances and track your balances with our
          sophisticated balance calculator.
        </p>
        <div className="home-features">
          <div className="feature">
            <h3>Easy to Use</h3>
            <p>
              Intuitive and user-friendly interface for hassle-free balance
              calculations.
            </p>
          </div>
          <div className="feature">
            <h3>Powerful Tools</h3>
            <p>
              Access a range of powerful tools to analyze and plan your
              financial goals.
            </p>
          </div>
          <div className="feature">
            <h3>Secure and Private</h3>
            <p>
              Your financial data is kept secure and private with advanced
              encryption.
            </p>
          </div>
        </div>
        <div className="btn-div">
          <Link className="home-button">
            Calculate Balance
          </Link>
          <Link className="home-button">
            View History
          </Link>
        </div>
      </div>
    </>
  );
}
