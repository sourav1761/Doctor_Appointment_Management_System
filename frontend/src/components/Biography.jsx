import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At ZeeCare Medical Institute, we are a dedicated team of healthcare professionals focused on providing comprehensive and compassionate medical care. Our state-of-the-art facility combines advanced technology with personalized care to ensure the well-being of every patient.

With a commitment to excellence, our team includes experienced doctors, nurses, and specialists from diverse fields, all working together to offer a holistic approach to health. We understand that each patient is unique, which is why we tailor our treatment plans to meet individual needs, fostering a compassionate and supportive environment for healing.
          </p>
          <p>We are all in 2024!</p>
          {/* <p>We are working on a MERN STACK PROJECT.</p> */}
          <p>
          At ZeeCare, we believe in not only treating illnesses but also empowering patients to take charge of their health. Our mission is to ensure a harmonious and comfortable journey toward optimal wellness, making us a trusted partner in your healthcare journey.
          </p>
          <p>At ZeeCare Medical Institute</p>
          <p>Thank you!!!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
