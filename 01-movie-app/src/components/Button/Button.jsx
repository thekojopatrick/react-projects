import { logoOutline } from "../../constants/images";
import "./Button.css";

const Button = ({onClick, icon, className, children }) => {
  return (
    <>
      <button onClick={onClick} className={className}>
        {icon && <img src={logoOutline} alt="Logo" />}
        {children}
      </button>
    </>
  );
};

export default Button;
