
import Button from "../Button/Button";
import "./Tab.css";

const Tab = ({ category,onButtonClick }) => {


  return (
    <Button  onClick={onButtonClick} className={"btn-secondary"}>
      {category}
    </Button>
  );
};

export default Tab;
