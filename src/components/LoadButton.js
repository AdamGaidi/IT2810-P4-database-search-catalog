import React from "react";
import "./LoadButton.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFetchAmount } from "actions/loadButtonAction";

const LoadButton = ({ setFetchAmount }) => {
  return (
    <button className="LoadButton" onClick={() => setFetchAmount()}>
      Load more
    </button>
  );
};

//--Redux--//
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFetchAmount }, dispatch);
};

// export default App;
export default connect(
  null,
  mapDispatchToProps
)(LoadButton);
