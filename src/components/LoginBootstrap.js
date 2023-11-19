import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const LoginBootstrap = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("Please enter your email address.");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Password Reset email send. please check your email");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-primary text-center mt-5">Please Login !!!</h2>
      <form onSubmit={handleSubmit} action="">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Your Email Address
          </label>
          <input
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Your Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      {success && <p className="mt-3">Successfully login to the account</p>}
      <p className="mt-3">
        <small>
          New to this website please <Link to="/register">Register</Link>
        </small>
      </p>
      <p>
        <small>
          Forget Password?
          <button
            type="button"
            onClick={handleForgetPassword}
            className="btn btn-link"
          >
            Reset Password
          </button>
        </small>
      </p>
    </div>
  );
};

export default LoginBootstrap;
