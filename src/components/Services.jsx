import React from 'react';
import './Services.css'; // You can create this CSS file for styling
import img1 from "../Assets/cardiology.jpg"
import img2 from "../Assets/6.jpg"
import img3 from "../Assets/7.jpg"
import img7 from "../Assets/8.jpg"
import img4 from "../Assets/9.jpg"
import img5 from "../Assets/10.jpg"
import img6 from "../Assets/11.jpg"
import img8 from "../Assets/3.jpg"
import img9 from "../Assets/4.jpg"
import img10 from "../Assets/5.jpg"
const Services = () => {
  const servicesData = [
    {
      title: 'Cardiology',
      description: 'Expert cardiology services for a healthy heart.',
      image: img1,
    },
    {
      title: 'Orthopedics',
      description: 'Comprehensive orthopedic care for musculoskeletal issues.',
      image: img2,
    },
    {
      title: 'Dermatology',
      description: 'Specialized dermatology treatments for skin health.',
      image: img3,
    },
    {
      title: 'Gynecology',
      description: 'Women’s health services with care and compassion.',
      image: img4,
    },
    {
      title: 'Pediatrics',
      description: 'Pediatric care to ensure the well-being of children.',
      image: img5,
    },
    {
      title: 'Ophthalmology',
      description: 'Advanced eye care and vision correction services.',
      image: img6,
    },
    {
      title: 'Dental Care',
      description: 'Complete dental care for a healthy smile.',
      image: img7,
    },
    {
      title: 'ENT Services',
      description: 'Ear, nose, and throat treatments for better health.',
image: img8,
    },
    {
      title: 'Neurology',
      description: 'Expert neurological care for a better life.',
      image: img9,
    },
    {
      title: 'Physical Therapy',
      description: 'Rehabilitation and physical therapy services.',
      image: img10,
    },
  ];

  return (
    <section className="services">
      <h2>Our Medical Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-button">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
