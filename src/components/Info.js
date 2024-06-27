import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Our elderly health management app offers a user-friendly interface tailored for seniors, featuring vital signs monitoring, medication reminders, and appointment scheduling
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Appointment Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Medication reminder"
          description="Our app offers personalized medication reminders tailored specifically for the elderly, ensuring they never miss a dose. With easy-to-use notifications and tracking features, the app not only reminds users to take their medication but also confirms adherence, providing peace of mind for both users and their caregivers. Stay on top of your health with our reliable and user-friendly solution.."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Health records"
          description="Our web app includes a comprehensive health records feature, designed to assist the elderly in managing their medical history effortlessly. By securely storing and organizing health information, it helps users keep track of their medical history, doctor visits, prescriptions, and more. This feature ensures that critical health information is always at their fingertips, reducing the risk of forgetfulness and enhancing overall healthcare management.."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;