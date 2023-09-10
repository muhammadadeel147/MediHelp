import React from 'react';
import './Services.css'; // You can create this CSS file for styling

const Services = () => {
  const servicesData = [
    {
      title: 'Cardiology',
      description: 'Expert cardiology services for a healthy heart.',
      image: 'cardiology-image.jpg',
    },
    {
      title: 'Orthopedics',
      description: 'Comprehensive orthopedic care for musculoskeletal issues.',
      image: 'orthopedics-image.jpg',
    },
    {
      title: 'Dermatology',
      description: 'Specialized dermatology treatments for skin health.',
      image: 'dermatology-image.jpg',
    },
    {
      title: 'Gynecology',
      description: 'Women’s health services with care and compassion.',
      image: 'gynecology-image.jpg',
    },
    {
      title: 'Pediatrics',
      description: 'Pediatric care to ensure the well-being of children.',
      image: 'pediatrics-image.jpg',
    },
    {
      title: 'Ophthalmology',
      description: 'Advanced eye care and vision correction services.',
      image: 'ophthalmology-image.jpg',
    },
    {
      title: 'Dental Care',
      description: 'Complete dental care for a healthy smile.',
      image: 'dental-image.jpg',
    },
    {
      title: 'ENT Services',
      description: 'Ear, nose, and throat treatments for better health.',
      image: 'ent-image.jpg',
    },
    {
      title: 'Neurology',
      description: 'Expert neurological care for a better life.',
      image: 'neurology-image.jpg',
    },
    {
      title: 'Physical Therapy',
      description: 'Rehabilitation and physical therapy services.',
      image: 'physical-therapy-image.jpg',
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
