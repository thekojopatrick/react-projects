/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { Tab } from "..";
import { useContext, useEffect } from "react";
import { makeRequest } from "../../utils/FetchApi";
import { AppContext } from "../../App";

function Category({ categories, section }) {
  const { activeTab, setActiveTab, setMovies, setTvShows, setFilter } =
    useContext(AppContext);
  let params = useParams();

  useEffect(() => {
    fetchData(section, params.type);
  }, [section, params.type]);

  const fetchData = async (section, route) => {
    const data = await makeRequest(`/${section}/${route}`);
    if (section === "movie") {
      await setMovies(data.results);
      return;
    } else {
      await setTvShows(data.results);
      return;
    }
  };

  return (
    <Wrapper>
      {categories.map((category) => {
        const { id, value } = category;

        return (
          <NavLink key={id} to={`/${section}${value}`}>
            <Tab
              key={id}
              category={category}
              activeTab={activeTab}
              setFilter={setFilter}
              setActiveTab={setActiveTab}
            />
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
