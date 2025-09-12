import React from "react";
import "../css/LoadingCard.css";

const LoadingCard = () => {
  return (
    <div className="col-md-6 col-lg-4 my-2">
      <div className="skeleton-card cards rounded-4 p-2 shadow-sm">
        <div className="skeleton skeleton-img rounded-4"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-small"></div>
        <div className="skeleton skeleton-small"></div>
        <div className="d-flex gap-2 mt-2">
          <div className="skeleton skeleton-circle"></div>
          <div className="skeleton skeleton-circle"></div>
          <div className="skeleton skeleton-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
