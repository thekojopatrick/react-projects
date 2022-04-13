import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Tab } from "..";

function Category({ categories, section }) {
  return (
    <Wrapper>
      {categories.map((category) => {
        const { id, title, route } = category;
        return (
          <NavLink key={id} to={`/${section}${route}`}>
            <Tab category={category} />
          </NavLink>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div.attrs({
  className: `bg-black p-2 bg-opacity-20 rounded-xl backdrop-blur-2xl place-items-stretch`,
})`
  display: flex;
  gap: 0.5rem;
`;
export default Category;
