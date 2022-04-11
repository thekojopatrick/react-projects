import { Category, Search, SHeader } from "../../components";
import { SubCategories } from "../../constants/data";
import { MoviesContainer } from "../../container";
import { useEffect, useState } from "react";
import makeRequest from "../../utils/FetchApi";

function TvShows() {
  const [tvshows, setTvshows] = useState([]);

  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    const data = await makeRequest(`https://api.themoviedb.org/3/discover/tv`);
    let tv = data.results;
    setTvshows(tv);
    console.log(tv);
  };

  return (
    <section className="mt-10">
      <SHeader>Tv Shows</SHeader>
      <section className="tabs-search flex justify-between items-center my-10">
        <Category section="tv" categories={SubCategories} />
        <Search />
      </section>
      {tvshows ? <MoviesContainer movies={tvshows} /> : "No Tv Shows Found"}
    </section>
  );
}

export default TvShows;
