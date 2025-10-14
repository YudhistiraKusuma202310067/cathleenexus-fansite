import React from "react";
import "./UIText.scss";

const UIText = ({ text, children, variant = "body", className = "", ...props }) => {
  return (
    <div className={`ui-text ui-text--${variant} ${className}`} {...props}>
      {text || children}
    </div>
  );
};

export default UIText;