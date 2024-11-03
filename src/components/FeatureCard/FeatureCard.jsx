import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ img, title, onClick }) => {
  return (
    <div className="card-container">
      <div class="card" onClick={onClick}>
        <div class="profile-container">
          <img src={img} />
        </div>
        <div class="profile-info">
          <h1>{title}</h1>
        </div>
        <div class="card-bottom"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
