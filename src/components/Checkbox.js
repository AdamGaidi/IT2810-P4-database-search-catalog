import React from "react";
import { Field } from "redux-form";
import "./Checkbox.css";

const CheckBox = ({ type }) => {
  return (
    <div className="Checkbox">
      <Field name={type} id={type} component="input" type="checkbox" />
      <label className="Checkbox__label" htmlFor={type}>
        {type}
      </label>
    </div>
  );
};

export default CheckBox;
