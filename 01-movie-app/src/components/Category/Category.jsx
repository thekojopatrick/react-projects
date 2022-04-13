import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { Tab } from "..";
import MovieContext from "../../pages";
import { useContext, useState, useEffect } from "react";
import makeRequest from "../../utils/FetchApi";

function Category({ categories, section }) {
  const [activeTab, setActiveTab] = useState("");
  const { setMovies } = useContext(MovieContext);
  let params = useParams();

  useEffect(() => {
    fetchData(section, params.type);
  }, [params.type]);

  const fetchData = async (section, route) => {
    const data = await makeRequest(
      `https://api.themoviedb.org/3/${section}/${route}`
    ).catch((err) => {
      console.log(err);
    });

    setMovies(data.results)
    console.log(data);
  };

  return (
    <Wrapper>
      {categories.map((category) => {
        const { id, value } = category;
        return (
          <NavLink key={id} to={`/${section}${value}`}>
            <Tab
              category={category}
              activeTab={activeTab}
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
