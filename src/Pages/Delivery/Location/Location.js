import React from "react";
import "./Location.css";
const Location = () => {
  return (
    <div className="map-container">
      <iframe
        className="map"
        title="my google map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14526.74021374626!2d90.65901102327881!3d24.461709969379605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1650020504939!5m2!1sen!2sbd"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
