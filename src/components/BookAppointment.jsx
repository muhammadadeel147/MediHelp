import React from 'react';
import './BookAppointment.css'; 

function BookAppointment() {
  return (
    <div className="book-appointment-container">
      <div className="info-container">
        <h2>Medical & General Care</h2>
        <p>We're Here For You</p>
        <p>
          Proactively revolutionize granular customer service after the pandemic from internal or "organic" sources.
          Distinctively impact proactive human capital rather than client-centered benefits.
        </p>
        <ul>
          <li>99% Success Rate</li>
          <li>100% Confidential</li>
          <li>Affordable Fees</li>
          <li>Free Consultation</li>
          <li>Expert Surveillance Agents</li>
          <li>Over 50 Years Experience</li>
        </ul>
        <button className="more-info-button">Get More Info</button>
      </div>
      <div className="form-container">
        <h2>Book an Appointment</h2>
        <p>We're here to help you. Please fill out the form below to schedule your appointment.</p>
        <form className="appointment-form">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="form-group">
            <label>Your Phone</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>
          <button className="make-appointment-button" type="submit">Make Appointment</button>
        </form>
        <p className="appointment-note">Please call us to ensure your appointment.</p>
      </div>
    </div>
  );
}

export default BookAppointment;
