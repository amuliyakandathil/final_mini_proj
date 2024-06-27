import React, { useEffect, useState } from 'react';
import '../Styles/PatientInfo.css';
import { FaUser, FaBirthdayCake, FaVenusMars, FaHeart, FaPhone, FaEnvelope, FaHome, FaStethoscope, FaFileMedical, FaMedkit, FaAmbulance, FaPills } from 'react-icons/fa';

const PatientInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from a database
    const fetchUserData = async () => {
      try {
        // Replace with your actual database fetching logic
        const fetchedUser = {
          profilePic: '../Assets/profile-1.png',
          fullName: 'John Doe',
          dateOfBirth: '1990-01-01',
          gender: 'Male',
          maritalStatus: 'Single',
          preferredLanguage: 'English',
          occupation: 'Software Developer',
          contactInfo: {
            address: '123 Main St',
            phoneNumber: '123-456-7890',
            email: 'john.doe@example.com',
          },
          emergencyContact: {
            name: 'Jane Doe',
            relationship: 'Sister',
            phoneNumber: '987-654-3210',
          },
          medicalInfo: {
            bloodType: 'O+',
            allergies: 'Peanuts',
            currentMedications: 'Medicine A, Medicine B',
            chronicConditions: ['Hypertension', 'Diabetes'],
            primaryCarePhysician: {
              name: 'Dr. Smith',
              contactInfo: '456-789-1234',
            },
          },
          insuranceInfo: {
            provider: 'Health Insurance Co.',
            policyNumber: 'XYZ123456',
          },
          additionalInfo: {
            medicalHistory: 'No significant medical history',
            pastSurgeries: 'Appendectomy',
            familyMedicalHistory: 'No significant family medical history',
            immunizationRecords: 'Up to date',
            advanceDirectives: 'None',
            preferredPharmacy: 'Local Pharmacy',
          },
        };
        setUser(fetchedUser);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="patient-info">
      <div className="section profile">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2><FaUser /> {user.fullName}</h2>
      </div>

      <div className="section personal-details">
        <h3>Personal Details</h3>
        <p><FaBirthdayCake /> <strong>Date of Birth:</strong> {user.dateOfBirth}</p>
        <p><FaVenusMars /> <strong>Gender:</strong> {user.gender}</p>
        <p><FaHeart /> <strong>Marital Status:</strong> {user.maritalStatus}</p>
        <p><strong>Preferred Language:</strong> {user.preferredLanguage}</p>
        <p><strong>Occupation:</strong> {user.occupation}</p>
      </div>

      <div className="section contact-info">
        <h3>Contact Information</h3>
        <p><FaHome /> <strong>Address:</strong> {user.contactInfo.address}</p>
        <p><FaPhone /> <strong>Phone Number:</strong> {user.contactInfo.phoneNumber}</p>
        <p><FaEnvelope /> <strong>Email Address:</strong> {user.contactInfo.email}</p>
      </div>

      <div className="section emergency-contact">
        <h3>Emergency Contact Information</h3>
        <p><FaUser /> <strong>Name:</strong> {user.emergencyContact.name}</p>
        <p><strong>Relationship:</strong> {user.emergencyContact.relationship}</p>
        <p><FaPhone /> <strong>Phone Number:</strong> {user.emergencyContact.phoneNumber}</p>
      </div>

      <div className="section medical-info">
        <h3>Medical Information</h3>
        <p><FaFileMedical /> <strong>Blood Type:</strong> {user.medicalInfo.bloodType}</p>
        <p><FaMedkit /> <strong>Allergies:</strong> {user.medicalInfo.allergies}</p>
        <p><FaPills /> <strong>Current Medications:</strong> {user.medicalInfo.currentMedications}</p>
        <p><FaHeart /> <strong>Chronic Conditions:</strong> {user.medicalInfo.chronicConditions.join(', ')}</p>
        <p><FaStethoscope /> <strong>Primary Care Physician:</strong> {user.medicalInfo.primaryCarePhysician.name}</p>
        <p><FaPhone /> <strong>Primary Care Physician Contact:</strong> {user.medicalInfo.primaryCarePhysician.contactInfo}</p>
      </div>

      <div className="section insurance-info">
        <h3>Insurance Information</h3>
        <p><FaFileMedical /> <strong>Provider:</strong> {user.insuranceInfo.provider}</p>
        <p><FaFileMedical /> <strong>Policy Number:</strong> {user.insuranceInfo.policyNumber}</p>
      </div>

      <div className="section additional-info">
        <h3>Additional Information</h3>
        <p><FaFileMedical /> <strong>Medical History:</strong> {user.additionalInfo.medicalHistory}</p>
        <p><FaFileMedical /> <strong>Past Surgeries:</strong> {user.additionalInfo.pastSurgeries}</p>
        <p><FaFileMedical /> <strong>Family Medical History:</strong> {user.additionalInfo.familyMedicalHistory}</p>
        <p><FaFileMedical /> <strong>Immunization Records:</strong> {user.additionalInfo.immunizationRecords}</p>
        <p><FaFileMedical /> <strong>Advance Directives:</strong> {user.additionalInfo.advanceDirectives}</p>
        <p><FaAmbulance /> <strong>Preferred Pharmacy:</strong> {user.additionalInfo.preferredPharmacy}</p>
      </div>
    </div>
  );
};

export default PatientInfo;

