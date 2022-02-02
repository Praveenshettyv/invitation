import React from "react";

const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15245.28351128822!2d79.18688891761425!3d17.20321615884181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6fdd090dc31a107b!2sNandi%20Hills!5e0!3m2!1sen!2sin!4v1641999394904!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
export { AddressMap };
