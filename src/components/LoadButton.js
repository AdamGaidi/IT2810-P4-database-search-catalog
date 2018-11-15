import React from "react";
import "./css/LoadButton.css";

const LoadButton = ({ onClick }) => {
  return (
    <button className="LoadButton" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadButton;
