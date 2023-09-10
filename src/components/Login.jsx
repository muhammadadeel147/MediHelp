import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.css"; 
import img from "../Assets/1.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Login Successful");
      console.log("Login Successful");

      navigate("/");
    }
  };

  return (
    <div className="login-page-container">
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <div className="login-form p-4 shadow-lg rounded">
              <h2 className="text-center mb-4">Login</h2>
              <form method="POST">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <FontAwesomeIcon icon={faLock} /> Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                  onClick={LoginUser}
                >
                  Login
                </button>
              </form>
              <div className="mt-3 text-center">
                Don't have an account? <Link to="/registration">Sign Up</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-1 mb-4 mb-md-0">
   
            <img src={img} alt="Login Illustration" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
