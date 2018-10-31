import React from "react";
import "./Pill.css";

const Pill = ({ color, text }) => {
  return (
    <span className="Pill" style={{ background: color }}>
      {text}
    </span>
  );
};

export default Pill;
