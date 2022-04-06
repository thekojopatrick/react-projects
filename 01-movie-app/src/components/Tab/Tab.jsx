import Button from "../Button/Button";
import "./Tab.css";

const Tab = ({ category }) => {
  return <Button className={"btn-secondary"}>{category}</Button>;
};

export default Tab;
