import { Search, Tabs } from "../../components";
import { Header, MoviesContainer } from "../../container";
import { tabs } from "../../constants/data";
import { useState } from "react";
import makeRequest from "../../utils/FetchApi";
import { useEffect } from "react";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvshows] = useState([]);
  let [discover, setDiscover] = useState([]);

  // let discover = [];

  useEffect(() => {
    getDiscover();
  }, []);

  const getDiscover = async () => {
    const checkLocalStorage = localStorage.getItem("Discover");

    if (checkLocalStorage !== []) {
      setDiscover(JSON.parse(checkLocalStorage));
    } else {
      const getMovies = await makeRequest(
        `https://api.themoviedb.org/3/discover/movie`
      );
      const getShows = await makeRequest(
        `https://api.themoviedb.org/3/discover/tv`
      );

      let mov = getMovies.results;
      let tv = getShows.results;
      setMovies(mov);
      setTvshows(tv);
      let data = [...movies, ...tvshows];
      localStorage.setItem("Discover", JSON.stringify(data));
      console.log(data);
    }
  };
  return (
    <>
      <Header />
      <section className="tabs-search flex justify-between items-center my-10">
        <Tabs categories={tabs} />
        <Search />
      </section>
      {discover ? <MoviesContainer movies={discover} /> : "No Movies to show"}
    </>
  );
};

export default Home;
