import React from "react";
import "./css/Stat.css";

const Stat = ({ label, number }) => {
  return (
    <div className="Stat">
      {label} <span className="Stat__number">{number}</span>
    </div>
  );
};

export default Stat;
