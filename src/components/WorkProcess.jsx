import React from 'react';
import './WorkProcess.css'; 



const WorkProcess = () => {
  const processSteps = [
    {
      title: 'Take Appointment',
      description: 'We provide janitorial and Medical services complexes for all types sizes of services.',
 
    },
    {
      title: 'Medical Checkup',
      description: 'We provide janitorial and Medical services complexes for all types sizes of services.',
     
    },
    {
      title: 'Started Treatment',
      description: 'We provide janitorial and Medical services complexes for all types sizes of services.',
    
    },
  ];

  return (
    <div className="work-process">
      <h2>Our Work Process</h2>
      <div className="process-steps">
        {processSteps.map((step, index) => (
          <div className="process-step" key={index}>
      
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
