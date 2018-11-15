import React from "react";
import "./css/Pill.css";

const Pill = ({ color, text }) => {
  return (
    <span className="Pill" style={{ background: color }}>
      {text}
    </span>
  );
};

export default Pill;
