import React from "react";
import PropTypes from "prop-types";

/* Implemented ourself because the alternatives were deprecated
or a lot more hassle */

const FontAwesome = ({ stylePrefix, icon, className }) => {
  return <i className={`${stylePrefix} fa-${icon} ${className}`} />;
};

FontAwesome.defaultProps = {
  stylePrefix: "fas"
};

FontAwesome.propTypes = {
  stylePrefix: PropTypes.string,
  icon: PropTypes.string.isRequired
};

export default FontAwesome;
