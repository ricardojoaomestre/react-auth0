import React from "react";

const AuthButton = ({ children, ...rest }) => {
  return (
    <button id="authButton" {...rest}>
      {children}
    </button>
  );
};

export default AuthButton;
