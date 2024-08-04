import React from "react";
import landingImage from "../images/Landingpage.jpg";
import landingImageSmall from "../images/LandingImageSmall.jpg";
import "./MainPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <picture>
        <source srcSet={landingImageSmall} media="(max-width: 768px)" />
        <img src={landingImage} alt="Landing" className="landing-image" />
      </picture>
    </div>
  );
};

export default LandingPage;
