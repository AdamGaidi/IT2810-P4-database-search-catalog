import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";

import "./css/Radiobutton.css";

const Radiobutton = ({ name, label, value, onChange }) => {
  return (
    <div className="Radiobutton">
      <Field
        name={name}
        component="input"
        type="radio"
        value={value}
        id={value}
        onChange={() => onChange()}
      />
      <label className="Radiobutton__label" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};

Radiobutton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Radiobutton;
