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


  useEffect(() => {
    getDiscover();
  }, []);

  const getDiscover = () => {
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
  };

  const getMovies = async () => {
    const data = await makeRequest(
      `https://api.themoviedb.org/3/discover/movie`
    );
    let movies = data.results;
    setMovies(movies);
    console.log(movies);
  };

  const getShows = async () => {
    const data = await makeRequest(`https://api.themoviedb.org/3/discover/tv`);
    let tv = data.results;
    setTvshows(tv);
    console.log(tv);
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
