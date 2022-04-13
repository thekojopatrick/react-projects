import { useContext, useEffect } from "react";
import { AppContext } from "../../pages/Home/Home";
import Button from "../Button/Button";
import "./Tab.css";

const Tab = ({ category }) => {
  const { activeTab, setActiveTab, setFiltered, discover } =
    useContext(AppContext);

  useEffect(() => {
    if (activeTab === "All") {
      setFiltered(discover);
      return;
    }
    const filtered = discover.filter((movie) =>
      movie.media_type.includes(activeTab)
    );
    setFiltered(filtered);
  }, [activeTab]);

  const onButtonClick = () => {
    setActiveTab(category.value);
  };

  return (
    <Button onClick={onButtonClick} className={"btn-secondary"}>
      {category.title}
    </Button>
  );
};

export default Tab;
