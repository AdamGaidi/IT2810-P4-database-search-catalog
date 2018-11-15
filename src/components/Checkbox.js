import React from "react";
import { Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetOffset } from "actions/offsetActions";
import "./Checkbox.css";

const CheckBox = ({ type, selectedFilters, resetOffset }) => {
  return (
    <div className="Checkbox">
      <Field
        name={type}
        id={type}
        component="input"
        type="checkbox"
        onChange={() => resetOffset()}
      />
      <label className="Checkbox__label" htmlFor={type}>
        {type}
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
)(CheckBox);
