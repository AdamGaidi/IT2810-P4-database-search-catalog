import React from "react";
import PropTypes from "prop-types";

/*
  A component rendering a FontAwesome icon.

  Implemented ourself because the alternatives were deprecated
  or a lot more hassle to use
*/

const FontAwesome = ({ stylePrefix, icon, className }) => {
  return <i className={`${stylePrefix} fa-${icon} ${className}`} />;
};

FontAwesome.defaultProps = {
  stylePrefix: "fas"
};

FontAwesome.propTypes = {
  stylePrefix: PropTypes.string,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default FontAwesome;
