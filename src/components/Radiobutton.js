import React from "react";
import { Field } from "redux-form";
import "./Radiobutton.css";

const Radiobutton = ({ name, label, value }) => {
  return (
    <div className="Radiobutton">
      <Field
        name={name}
        component="input"
        type="radio"
        value={value}
        id={value}
      />
      <label className="Radiobutton__label" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};

export default Radiobutton;
