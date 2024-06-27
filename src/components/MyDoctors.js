import React, { useState } from 'react';
import { FaUserMd, FaStar } from 'react-icons/fa';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import '../Styles/MyDoctors.css';

const DoctorCard = ({ doctor, isConsulted }) => {
  const [rating, setRating] = useState(doctor.rating || 0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className={`doctor-card ${isConsulted ? 'consulted' : 'suggested'}`}>
      <img src={doctor.image} alt={doctor.name} className={`doctor-image ${isConsulted ? 'consulted' : 'suggested'}`} />
      <div className={`doctor-details ${isConsulted ? 'consulted' : 'suggested'}`}>
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <p><MdLocationOn className="icon" /> {doctor.location}</p>
        <p><MdPhone className="icon" /> {doctor.contact}</p>
        {isConsulted && (
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <FaStar 
                key={index} 
                className={`star ${index < rating ? 'selected' : ''}`} 
                onClick={() => handleRating(index + 1)} 
              />
            ))}
          </div>
        )}
      </div>
      <FaUserMd className="doctor-icon" />
    </div>
  );
};

const MyDoctors = () => {
  const consultedDoctors = [
    { name: 'Dr. Anil Kumar', specialization: 'Cardiologist', location: 'New Delhi, DL', contact: '9876543210', image: 'https://via.placeholder.com/150', rating: 4 },
    { name: 'Dr. Priya Sharma', specialization: 'Dermatologist', location: 'Mumbai, MH', contact: '9123456789', image: 'https://via.placeholder.com/150', rating: 5 },
    { name: 'Dr. Ravi Singh', specialization: 'Gastroenterologist', location: 'Bangalore, KA', contact: '9988776655', image: 'https://via.placeholder.com/150', rating: 3 },
    { name: 'Dr. Neha Agarwal', specialization: 'Endocrinologist', location: 'Chennai, TN', contact: '9098765432', image: 'https://via.placeholder.com/150', rating: 2 },
  ];

  const suggestedDoctors = [
    { name: 'Dr. Vikram Rao', specialization: 'Neurologist', location: 'Hyderabad, TS', contact: '9988001122', image: 'https://via.placeholder.com/150' },
    { name: 'Dr. Suman Jain', specialization: 'Pediatrician', location: 'Pune, MH', contact: '9876009988', image: 'https://via.placeholder.com/150' },
    { name: 'Dr. Rakesh Mehta', specialization: 'Psychiatrist', location: 'Kolkata, WB', contact: '9090909090', image: 'https://via.placeholder.com/150' },
    { name: 'Dr. Sneha Patil', specialization: 'Ophthalmologist', location: 'Ahmedabad, GJ', contact: '8888777766', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="my-doctors-page">
      <h1>My Doctors</h1>
      <div className="doctors-section">
        <h2>Consulted Doctors</h2>
        <div className="doctors-list">
          {consultedDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} isConsulted={true} />
          ))}
        </div>
      </div>
      <div className="doctors-section">
        <h2>Suggested Doctors</h2>
        <div className="doctors-list">
          {suggestedDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} isConsulted={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDoctors;
