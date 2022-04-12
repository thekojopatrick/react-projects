import React, { useEffect, useState, createContext } from "react";
import { Search, Tabs } from "../../components";
import { Header, MoviesContainer } from "../../container";
import { tabs } from "../../constants/data";
import makeRequest from "../../utils/FetchApi";

export const AppContext = createContext(null);

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvshows] = useState([]);
  let [discover, setDiscover] = useState([]);

  useEffect(() => {
    getDiscover();
  }, [tvshows, movies]);

  function getDiscover() {
    const checkLocalStorage = localStorage.getItem("Discover");

    if (checkLocalStorage) {
      setDiscover(JSON.parse(checkLocalStorage));
    } else {
      getMovies();
      getShows();
      let data = [...movies, ...tvshows];
      setDiscover(data);
      localStorage.setItem("Discover", JSON.stringify(data));
    }
  }

  const getMovies = async () => {
    const data = await makeRequest(
      `https://api.themoviedb.org/3/discover/movie`
    );
    let movies = data.results;

    movies.forEach((movie) => {
      movie["media_type"] = "movie";
    });
    setMovies(movies);
    //console.log(movies);
    return data;
  };

  const getShows = async () => {
    const data = await makeRequest(`https://api.themoviedb.org/3/discover/tv`);
    let tv = data.results;
    tv.forEach((tv) => {
      tv["media_type"] = "tv";
    });
    setTvshows(tv);
    //console.log(tv);
    return data;
  };

  return (
    <AppContext.Provider
      value={{ getMovies, movies, getShows, tvshows, discover }}
    >
      <>
        <Header />
        <section className="tabs-search flex flex-col-reverse md:flex-row md:justify-between items-center my-10">
          <Tabs categories={tabs} />
          <Search />
        </section>
        {discover ? (
          <MoviesContainer movies={discover} />
        ) : (
          "No Movies or show found"
        )}
      </>
    </AppContext.Provider>
  );
};

export default Home;
