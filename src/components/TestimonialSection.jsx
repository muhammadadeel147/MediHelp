import React from 'react';
import './TestimonialSection.css';
import img from "../Assets/4.jpg"
import img1 from "../Assets/3.jpg"

const TestimonialSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      specialty: 'Cardiologist',
      image: img,
      text:
        'I have been using this medical website for years, and it has been an invaluable resource for both my patients and me. The comprehensive information and user-friendly design make it a top choice for medical professionals.',
    },
    {
      id: 2,
      name: 'Dr. John Doe',
      specialty: 'Pediatrician',
      image: img1,
      text:
        'The medical websites up-to-date articles and research findings have greatly enhanced my practice. Its an excellent platform for staying informed about the latest developments in pediatric medicine.',
    },
   
  ];

  return (
    <div className="testimonial-section">
      <h2>Testimonials</h2>
      <h3>Our Patient Says</h3>
      <div className="testimonial-container">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial">
            <img src={review.image} alt={review.name} />
            <p className="review-text">{review.text}</p>
            <p className="review-author">
              {review.name}, {review.specialty}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
