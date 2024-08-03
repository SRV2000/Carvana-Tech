import React from "react";
import landingImage from "../images/Landingpage.jpg";
import "./MainPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src={landingImage} alt="Landing" className="landing-image" />
    </div>
  );
};

export default LandingPage;
