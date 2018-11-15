import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { resetOffset } from "actions/offsetActions";

import Checkbox from "components/Checkbox";

const CheckboxContainer = ({ type, resetOffset }) => {
  return <Checkbox identifier={type} onChange={resetOffset} />;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ resetOffset }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(CheckboxContainer);
