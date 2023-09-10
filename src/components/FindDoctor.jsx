import React from 'react';
import './FindDoctor.css'; 
import img from "../Assets/2.jpg";

const FindDoctor = () => {
  return (
    <div className="your-component-container">
      <div className="left-content">
        <img src={img} alt="Doctor" />
      </div>
      <div className="right-content">
        <h2>Find a Solution to Your Problem with a Doctor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Book Appointment</button>
       
      </div>
      </div>
      
    
  );
};

export default FindDoctor;
