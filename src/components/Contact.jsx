import React,{ useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ContactUsPage.css'; 

const ContactUsPage = () => {
  
  const [userData,setUserData] = useState({});

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
 
          "Content-Type": "application/json",
        },
       
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
     
    }
  };

  useEffect(() => {
    userContact();
  }, []);





  return (
    
    <div className="container mt-5">
    
      <div className="contact-info shadow p-4 rounded mb-4">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-item">
              <i className="bi bi-phone"></i>
              <h4>Phone Number</h4>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <i className="bi bi-envelope"></i>
              <h4>Email</h4>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <i className="bi bi-geo-alt"></i>
              <h4>Address</h4>
              <p>123 Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>

<div className="container">
  <div className="row justify-content-center">
    <div className="contact-form shadow p-4 rounded mt-4 col-md-8">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={userData.name}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={userData.email}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            required
            value={userData.phone}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
  );
};

export default ContactUsPage;
