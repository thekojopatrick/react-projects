import { useEffect, useState } from "react";
import { Category, Search, SHeader } from "../../components";
import { SubCategories } from "../../constants/data";
import { MoviesContainer } from "../../container";
import makeRequest from "../../utils/FetchApi";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await makeRequest(
      `https://api.themoviedb.org/3/discover/movie`
    );
    let movies = data.results;
    setMovies(movies);
    console.log(movies);
  };
  return (
    <section className="mt-10">
      <SHeader>Movies</SHeader>
      <section className="tabs-search flex justify-between items-center my-10">
        <Category section="movie" categories={SubCategories} />
        <Search />
      </section>
      {movies ? <MoviesContainer movies={movies} /> : "No Movies Found"}
    </section>
  );
}

export default Movies;
