import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";

import "./css/Checkbox.css";

const Checkbox = ({ identifier, onChange }) => {
  return (
    <div className="Checkbox">
      <Field
        name={identifier}
        id={identifier}
        component="input"
        type="checkbox"
        onChange={() => onChange()}
      />
      <label className="Checkbox__label" htmlFor={identifier}>
        {identifier}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  identifier: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Checkbox;
