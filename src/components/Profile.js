import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaStethoscope, FaFileMedical, FaFlask, FaCalendarAlt, FaComments, FaClock } from 'react-icons/fa';
import '../Styles/Profile.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const user = {
    name: 'John Doe',
  };

  const upcomingAppointments = [
    { date: '2024-06-30', doctor: 'Dr. Smith' },
    { date: '2024-07-10', doctor: 'Dr. Doe' },
  ];

  const currentMedications = [
    { name: 'Medicine A', time: '7:00 AM' },
    { name: 'Medicine B', time: '7:00 PM' },
  ];

  const navigateToPatientInfo = () => {
    navigate('/patient-info', { state: { user } });
  };

  const navigateToMyDoctors = () => {
    navigate('/my-doctors', { state: { user } });
  };

  const navigateToMedicalRecord = () => {
    navigate('/medical-record', { state: { user } });
  };

  const navigateToFamily = () => {
    navigate('/family', { state: { user } });
  };

  const navigateToAppointmentForm = () => {
    navigate('/appointment-form', { state: { user } });
  };

  const navigateToTalkToUs = () => {
    navigate('/TalkTo-Us', { state: { user } });
  };

  const handleMedicationClick = (medication) => {
    // Navigate to Medication page with medication details
    navigate('/medication', { state: { medication } });
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Welcome, {user.name}</h1>
      </div>
      <div className="profile-content">
        <div className="profile-sections">
          <div className="profile-section" onClick={navigateToPatientInfo}>
            <FaUser className="profile-icon" />
            <p>Personal Information</p>
          </div>
          <div className="profile-section" onClick={navigateToMyDoctors}>
            <FaStethoscope className="profile-icon" />
            <p>My Doctors</p>
          </div>
          <div className="profile-section" onClick={navigateToMedicalRecord}>
            <FaFileMedical className="profile-icon" />
            <p>Medical Reports</p>
          </div>
          <div className="profile-section" onClick={navigateToFamily}>
            <FaFlask className="profile-icon" />
            <p>Emergency Contact</p>
          </div>
          <div className="profile-section" onClick={navigateToAppointmentForm}>
            <FaCalendarAlt className="profile-icon" />
            <p>Appointments</p>
          </div>
          <div className="profile-section" onClick={navigateToTalkToUs}>
            <FaComments className="profile-icon" />
            <p>Talk to Us</p>
          </div>
        </div>
        <div className="sidebar">
          <h2>Upcoming Appointments</h2>
          <ul>
            {upcomingAppointments.map((appointment, index) => (
              <li key={index}>
                <span>Date:</span> {appointment.date}, <span>Doctor:</span> {appointment.doctor}
              </li>
            ))}
          </ul>
          <div className="current-medications">
            <h2>Current Medications</h2>
            {currentMedications.map((medication, index) => (
              <button className="medication-card" key={index} onClick={() => handleMedicationClick(medication)}>
                <div className="medication-details">
                  <h3 className="medication-name">{medication.name}</h3>
                  <div className="medication-time">
                    <FaClock className="clock-icon" /> {medication.time}
                  </div>
                  <div className="medication-taken">
                    <label>
                      Taken <input type="checkbox" />
                    </label>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
