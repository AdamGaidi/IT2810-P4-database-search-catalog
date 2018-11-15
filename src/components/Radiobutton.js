import React from "react";
import { Field } from "redux-form";
import "./Radiobutton.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetOffset } from "actions/offsetActions";

const Radiobutton = ({ name, label, value, resetOffset }) => {
  return (
    <div className="Radiobutton">
      <Field
        name={name}
        component="input"
        type="radio"
        value={value}
        id={value}
        onChange={() => resetOffset()}
      />
      <label className="Radiobutton__label" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};

//--Redux--//
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ resetOffset }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(Radiobutton);
