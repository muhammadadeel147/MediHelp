import React from 'react';
import './Specialists.css'; 
import img from "../Assets/2.jpg"; 
import img1 from "../Assets/3.jpg";
import img2 from "../Assets/4.jpg";
import img3 from "../Assets/5.jpg";
const Specialists = () => {
  const specialistsData = [
    {
      name: 'Dr. Addison Alexander',
      intro: 'This text represents a brief introduction of doctor and this text will be displayed on homepage and all the places where multiple doctors are listed.',
      imgurl:img
    },
    {
      name: 'Dr. Adaline Becka',
      intro: 'This text represents a brief introduction of doctor and this text will be displayed on homepage and all the places where multiple doctors are listed.',
      imgurl:img1
    },
    {
      name: 'Dr. Andrew Bert',
      intro: 'This text represents a brief introduction of doctor and this text will be displayed on homepage and all the places where multiple doctors are listed.',
      imgurl:img2
    },
    {
      name: 'Dr. Orana Taleebin',
      intro: 'This text represents a brief introduction of doctor and this text will be displayed on homepage and all the places where multiple doctors are listed.',
      imgurl:img3
    },
  ];

  return (
    <div className="specialists">
      <h2>Meet Our Medical Specialists</h2>
      <div className="specialist-list">
        {specialistsData.map((specialist, index) => (
          <div className="specialist-card" key={index}>
            <img src={specialist.imgurl } alt="" />
            <div className="specialist-info">
              <h3>{specialist.name}</h3>
              <p>{specialist.intro}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
