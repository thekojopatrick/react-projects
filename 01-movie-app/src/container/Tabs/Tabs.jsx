import { useEffect } from "react";
import styled from "styled-components";
import { Tab } from "../../components";
import { categories } from "../../constants/data";

const Tabs = () => {
  useEffect(() => {}, []);
  //console.log(categories);

  return (
    <TabsWrapper>
      {categories.map((category, id) => {
        return <Tab key={id} category={category} />;
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
