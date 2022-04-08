import { logoOutline } from "../../constants/images";
import "./Button.css";

const Button = ({ icon, className, children }) => {
  return (
    <>
      <button className={className}>
        {icon && <img src={logoOutline} alt="Logo" />}
        {children}
      </button>
    </>
  );
};

export default Button;
