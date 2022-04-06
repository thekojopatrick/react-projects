//import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { logoOutline } from "../../constants/images";
import "./Button.css";

const Button = ({ icon, className, children }) => {
  return (
    <>
      <Link onClick={() => {}} to="" className={ className }>
        {icon && <img src={logoOutline} alt="Logo" />}
        {children}
      </Link>
    </>
  );
};

export default Button;
