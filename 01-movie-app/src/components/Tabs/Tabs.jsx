/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Tab } from "..";
import { AppContext } from "../../App";

const Tabs = ({ categories }) => {
  const { activeTab, setActiveTab, setFiltered, discover, setFilter } =
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

  return (
    <TabsWrapper>
      {categories.map((category, id) => {
        return (
          <Tab
            key={id}
            setActiveTab={setActiveTab}
            category={category}
            activeTab={activeTab}
            setFilter={setFilter}
          />
        );
      })}
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div.attrs({
  className: `bg-black p-2 bg-opacity-20 rounded-xl backdrop-blur-2xl place-items-stretch`,
})`
  display: flex;
  gap: 0.5rem;
`;

export default Tabs;
