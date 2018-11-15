import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { resetOffset } from "actions/offsetActions";

import Radiobutton from "components/Radiobutton";

const RadiobuttonContainer = ({ name, label, value, resetOffset }) => {
  return (
    <Radiobutton
      name={name}
      label={label}
      value={value}
      onChange={resetOffset}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ resetOffset }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(RadiobuttonContainer);
