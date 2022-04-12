import styled from "styled-components";
import { useRef } from "react";

import { Tab } from "..";

const Tabs = ({ categories }) => {
  const tabEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    tabEl.current++;
    console.log(`Clicked ${tabEl.current} times`);
    let text = tabEl.current;

    console.log(text);
  };

  return (
    <TabsWrapper>
      {categories.map((category, id) => {
        return (
          <Tab
            ref={tabEl}
            onButtonClick={onButtonClick}
            key={id}
            category={category}
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
