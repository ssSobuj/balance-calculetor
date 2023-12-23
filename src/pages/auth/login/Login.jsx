/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import "./login.css";
import { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";
import { toast } from "react-toastify";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // const hadnleSingInData = async (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   signInWithEmailAndPassword(email, password);
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = async (data) => {
    const email = data.Email;
    const password = data.Password;
    // console.log(email, password);  
    try {
      await signInWithEmailAndPassword(email, password);
      toast.success("Sing in successfully");
    } catch {
      toast.error("Error creating user");
    }    
  };
  console.log(user);

  return (
    <>
      <div className="login-container">
        <h2 className="title">Login</h2>
        <p>
          You Do not have an acount <Link to={"/singup"}>Create an aconut</Link>{" "}
        </p>
        <form className="login-form" onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("Password", {})}
          />

          <div className="login-btn-div">
            <button>Login</button>
          </div>
        </form>
        <div>
          <button>Sign up with google</button>
          <button>Sign up with GitHub</button>
        </div>
      </div>

      {/* <div className="login-container">
        <h2 className="title">Login</h2>
        <p>
          You Do not have an acount <Link to={"/singup"}>Create an aconut</Link>{" "}
        </p>
        <form className="login-form" onSubmit={hadnleSingInData}>
          <label htmlFor="username">Username:</label>
          <input
            required
            type="email"
            id="email"
            name="email"
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
            <button>Login</button>
          </div>
        </form>
        <div>
          <button>Sign up with google</button>
          <button>Sign up with GitHub</button>
        </div>
      </div> */}
    </>
  );
}
