import React, { useEffect, useContext } from "react";
import { Search, Tabs } from "../../components";
import { Header, MoviesContainer } from "../../container";
import { tabs } from "../../constants/data";
import { getMovies, getShows } from "../../utils/FetchApi";
import { AppContext } from "../../App";

const Home = () => {
  const {
    discover,
    movies,
    tvshows,
    filtered,
    setActiveTab,
    setFiltered,
    filter,
    setFilter,
    setDiscover,
  } = useContext(AppContext);

  useEffect(() => {
    getDiscover();
    setActiveTab("All");
    setFilter("All");
  }, [tvshows, movies]);

  async function getDiscover() {
    const checkLocalStorage = localStorage.getItem("Discover");
    if (checkLocalStorage) {
      setDiscover(JSON.parse(checkLocalStorage));
      setFiltered(discover);
    } else {
      const movies = await getMovies();
      const tvshows = await getShows();
      let data = [...movies, ...tvshows];
      setDiscover(data);
      setFiltered(data);
      //console.log(data);
      localStorage.setItem("Discover", JSON.stringify(data));
    }
  }

  return (
    <>
      <Header />
      <section className="tabs-search flex flex-col-reverse md:flex-row md:justify-between items-center my-10">
        <Tabs categories={tabs} />
        <Search />
      </section>
      {discover ? (
        <MoviesContainer movies={filtered} filter={filter} />
      ) : (
        "No Movies or show found"
      )}
    </>
  );
};

export default Home;
