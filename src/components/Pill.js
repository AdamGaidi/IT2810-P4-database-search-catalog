import React from "react";
import "./css/Pill.css";

/**
 * A component representing the type of the Pokemon
 */

const Pill = ({ color, text }) => {
  return (
    <span className="Pill" style={{ background: color }}>
      {text}
    </span>
  );
};

export default Pill;
