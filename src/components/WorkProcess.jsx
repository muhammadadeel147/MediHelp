import React from 'react';
import './WorkProcess.css'; // Create this CSS file for styling
//import arrow01 from './images/arrow01.png'; // Import your arrow01 image
//import arrow02 from './images/arrow02.png'; // Import your arrow02 image

const WorkProcess = () => {
  const processSteps = [
    {
      title: 'Take Appointment',
      description: 'We provide janitorial and Medical services complexes for all types sizes of services.',
    //  image: arrow01,
    },
    {
      title: 'Medical Checkup',
      description: 'We provide janitorial and Medical services complexes for all types sizes of services.',
     // image: arrow02,
    },
    {
      title: 'Started Treatment',
      description: 'We provide janitorial and Medical services complexes for all types sizes of services.',
    //  image: arrow01,
    },
  ];

  return (
    <div className="work-process">
      <h2>Our Work Process</h2>
      <div className="process-steps">
        {processSteps.map((step, index) => (
          <div className="process-step" key={index}>
         {/* //   <img src={step.image} alt={`Step ${index + 1}`} /> */}
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <button>Get In Touch </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
