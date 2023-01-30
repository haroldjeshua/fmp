import React from "react";

const CardPage = ({ card }) => {
  return (
    <div className="card-page">
      <div className="card-page-icon">{card.icon}</div>
      <div className="card-page-content">
        <h1 className="card-page-heading">{card.heading}</h1>
        <p className="card-page-subheading">{card.subheading}</p>
      </div>
    </div>
  );
};

export default CardPage;
