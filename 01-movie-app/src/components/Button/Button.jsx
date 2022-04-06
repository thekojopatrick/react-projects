import { logoOutline } from "../../constants/images";
import "./Button.css";

const Button = ({ icon, children }) => {
  return (
    <>
      <a href="/" className="btn-primary">
        {icon && <img src={logoOutline} alt="Logo" />}
        {children}
      </a>
    </>
  );
};

export default Button;
