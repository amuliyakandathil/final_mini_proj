import React from 'react';
import { FaUserMd, FaComments } from 'react-icons/fa'; // Removed FaPhoneAlt import
import { AiOutlineMessage } from 'react-icons/ai';
import '../Styles/TalkToUs.css';

const TalkToUs = () => {
  return (
    <div className="TalkToUs">
      <header className="TalkToUs-header">
        <h1>Talk to Us</h1>
      </header>
      <main>
        <div className="card">
          <FaUserMd size={50} color="#333" />
          <h2>Doctors</h2>
          <p>Get medical advice and assistance from our experienced doctors.</p>
          <button>Talk to a Doctor</button>
        </div>
        <div className="card">
          <FaComments size={50} color="#333" />
          <h2>Counselors</h2>
          <p>Speak with our counselors about your concerns and get support.</p>
          <button>Talk to a Counselor</button>
        </div>
        <div className="card">
          <AiOutlineMessage size={50} color="#333" />
          <h2>Chat Support</h2>
          <p>Need help with something? Contact our support team via chat.</p>
          <button>Chat Support</button>
        </div>
      </main>
    </div>
  );
}

export default TalkToUs;
