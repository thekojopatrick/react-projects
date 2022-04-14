import Button from "../Button/Button";
import "./Tab.css";

const Tab = ({ category, activeTab, setActiveTab, setFilter }) => {
  const onButtonClick = () => {
    setFilter(category.title);
    setActiveTab(category.value);
  };

  return (
    <Button
      onClick={onButtonClick}
      className={
        activeTab === category.value ? "btn-secondary active" : "btn-secondary"
      }
    >
      {category.title}
    </Button>
  );
};

export default Tab;
