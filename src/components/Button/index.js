import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const Button = ({ children, onClick, width }) => {
  return (
    <button className="button-card" onClick={onClick} style={{ width }}>
      {children}
    </button>
  );
};

Button.propTypes = {
  childen: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default Button;
