import { useEffect } from "react";
import styled from "styled-components";
import { Tab } from "../../components";
import { categories } from "../../constants/data";

const Tabs = () => {
  useEffect(() => {
    console.log(categories);
  }, []);

  return <TabsWrapper></TabsWrapper>;
};

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  width: 368px;
  height: 56px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(80px);
  border-radius: 12px;
  @apply bg-red-900;
`;

export default Tabs;
