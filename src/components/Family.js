import React from 'react';
import '../Styles/Family.css';
import { FaUserCircle } from 'react-icons/fa'; // Importing an icon from react-icons

function App() {
  const contacts = [
    { name: 'Ajith Kumar', relation: 'Father', phone: '1234567890' },
    { name: 'Remya V', relation: 'Mother', phone: '2345678901' },
    { name: 'Rashi', relation: 'Friend', phone: '3456789012' },
  ];

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'https: //encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfK6brMJBkuCZiNRPjUxc9dUp3BfXIp3Lcg&s'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <header className="App-header">
        <h1>Emergency Contacts</h1>
        <div className="contacts">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card">
              <FaUserCircle className="contact-icon" /> {/* Adding the icon */}
              <h2>{contact.name}</h2>
              <p>Relation: {contact.relation}</p>
              <p>Phone: {contact.phone}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
