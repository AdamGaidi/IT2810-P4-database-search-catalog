import React from "react";
import PropTypes from "prop-types";

import FontAwesome from "components/FontAwesome";
import "./css/StarButton.css";

const StarButton = ({ isStarred, name, action, onClick }) => {
  return (
    <button className="StarButton__star-button" onClick={() => onClick()}>
      <FontAwesome
        icon="star"
        stylePrefix={isStarred ? "fas" : "far"}
        className="StarButton__star-icon"
      />
    </button>
  );
};

StarButton.propTypes = {
  isStarred: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  action: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default StarButton;
