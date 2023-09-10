import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './SignUpPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faMobileAlt,
  faBriefcase,
  faLock,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons';

const SignUpPage = () => {
  const navigate = useNavigate();
 
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

 

  const PostData =async(e)=>{
    e.preventDefault();

    const{ name,email,phone,work,password,cpassword}=user;

    const res = await fetch("/register",{
method: "POST",
headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify({
  name,email,phone,work,password,cpassword
})
    });

const data =await res.json();
if(data.status === 422 ||!data){
  window.alert("Invalid Registration");
  console.log("Invalid Registration");
}
else{
  window.alert(" Registration Successful");
  console.log(" Registration Successful");

  navigate("/login");
}

  }
  return (
    <div className="container mt-5">
    <div className="signup-form p-4 shadow-lg rounded">
      <h2 className="text-center mb-4">Sign Up</h2>
      <form method='POST' >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <FontAwesomeIcon icon={faUser} /> Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputs}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputs}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            <FontAwesomeIcon icon={faMobileAlt} /> Mobile Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleInputs}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="work" className="form-label">
            <FontAwesomeIcon icon={faBriefcase} /> Profession
          </label>
          <input
            type="text"
            className="form-control"
            id="work"
            name="work"
            value={user.work}
            onChange={handleInputs}
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
            value={user.password}
            onChange={handleInputs}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            <FontAwesomeIcon icon={faUnlockAlt} /> Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4"name='signup' id='signup' onClick={PostData}>
          Register
        </button>
      </form>
      <div className="mt-3 text-center">
        Already have an account? <Link to="/login">Login here</Link>
      </div>
      
    </div>
  </div>
);
};

export default SignUpPage;