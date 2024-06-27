import React from 'react';
import '../Styles/MedicalRecord.css';
import { FaFileMedical, FaPrescriptionBottle, FaVial, FaSyringe, FaNotesMedical, FaAllergies } from 'react-icons/fa';

const components = [
  { title: 'Medical History', icon: <FaFileMedical /> },
  { title: 'Prescriptions', icon: <FaPrescriptionBottle /> },
  { title: 'Lab Records', icon: <FaVial /> },
  { title: 'Immunization', icon: <FaSyringe /> },
  { title: 'Progress Notes', icon: <FaNotesMedical /> },
  { title: 'Allergies', icon: <FaAllergies /> }
];

const ComponentCard = () => {
  return (
    <div className="component-grid">
      {components.map((comp, index) => (
        <div key={index} className="component-card">
          <div className="icon">{comp.icon}</div>
          <h3>{comp.title}</h3>
          <div className="buttons">
            <button className="view-button">View</button>
            <button className="upload-button">Upload</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentCard;
