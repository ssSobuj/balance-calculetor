/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import './about.css'
import { useNavigate } from "react-router-dom";


export default function About() {

  const naviget = useNavigate()

  const goBackToHome = ()=>{
    naviget('/')
  }
  useEffect(() => {
    document.title = "About";
  });
  return (
    <>
      <div className="about-container">
        <h2 className="title">About Us</h2>
        <p className="description">
          Welcome to Balance Calculator, your go-to tool for managing and
          tracking your financial balances.
        </p>
        <p className="p">
          Our mission is to provide a user-friendly platform that empowers
          individuals to take control of their finances. Whether you are
          budgeting, saving, or planning for the future, our balance calculator
          has got you covered.
        </p>
        <p className="p">
          We strive to create a secure and efficient environment for users to
          perform financial calculations with ease. Our team is dedicated to
          continuous improvement, ensuring that our tools evolve to meet the
          changing needs of our users.
        </p>
        <p className="p">
          Thank you for choosing Balance Calculator as your financial companion.
          We look forward to helping you achieve your financial goals.
        </p>

        <button onClick={goBackToHome}>Back to home</button>
      </div>
    </>
  );
}
