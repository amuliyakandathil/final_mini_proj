import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [department, setDepartment] = useState("");
  const [hospital, setHospital] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Example of the most booked day. Replace this with your ML model's prediction.
  const mostBookedDay = "Monday";

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!day.trim()) {
      errors.day = "Day is required";
    }
    if (!date.trim()) {
      errors.date = "Date is required";
    }
    if (!time.trim()) {
      errors.time = "Time is required";
    }
    if (!department.trim()) {
      errors.department = "Department is required";
    }
    if (!hospital.trim()) {
      errors.hospital = "Hospital is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setDay("");
    setDate("");
    setTime("");
    setDepartment("");
    setHospital("");
    setFormErrors({});

    setIsSubmitted(true);
  };

  const handleSuggestionClick = () => {
    setDay(mostBookedDay);
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Healthplus <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      {isSubmitted ? (
        <div className="success-message-container">
          <p className="success-message">Appointment Scheduled!</p>
        </div>
      ) : (
        <div className="form-container">
          <h2 className="form-title">
            <span>Book Appointment Online</span>
          </h2>

          <form className="form-content" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Day:
                <input
                  type="text"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  required
                />
                {formErrors.day && <p className="error-message">{formErrors.day}</p>}
                <div className="suggestion">
                  <span>Do you want to book on {mostBookedDay}?</span>
                  <button type="button" onClick={handleSuggestionClick}>
                    Yes
                  </button>
                </div>
              </label>
            </div>
            
            <div className="form-group">
              <label>
                Date:
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                {formErrors.date && <p className="error-message">{formErrors.date}</p>}
              </label>
            </div>

            <div className="form-group">
              <label>
                Time:
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
                {formErrors.time && <p className="error-message">{formErrors.time}</p>}
              </label>
            </div>

            <div className="form-group">
              <label>
                Department (Specialist):
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                />
                {formErrors.department && <p className="error-message">{formErrors.department}</p>}
              </label>
            </div>

            <div className="form-group">
              <label>
                Hospital:
                <input
                  type="text"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  required
                />
                {formErrors.hospital && <p className="error-message">{formErrors.hospital}</p>}
              </label>
            </div>

            <button type="submit" className="text-appointment-btn">
              Confirm Appointment
            </button>
          </form>
        </div>
      )}

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default AppointmentForm;


