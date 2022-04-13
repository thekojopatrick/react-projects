import { useEffect, useState } from "react";
import { Category, Search, SHeader, Loading } from "../../components";
import { SubCategories } from "../../constants/data";
import { MoviesContainer } from "../../container";
import makeRequest from "../../utils/FetchApi";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setIsLoading(true);
    const data = await makeRequest(
      `https://api.themoviedb.org/3/discover/movie`
    ).catch((err) => {
      console.log(err);
    });

    setTimeout(() => {
      let movies = data.results;
      movies.forEach((movie) => {
        movie["media_type"] = "movie";
      });
      setMovies(movies);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <section className="mt-10 m-4">
          <SHeader>Movies</SHeader>
          <section className="tabs-search flex flex-col-reverse md:flex-row md:justify-between items-center my-10">
            {/* <Category section="movie" categories={SubCategories} /> */}
            <Search />
          </section>
          {movies ? <MoviesContainer movies={movies} /> : "No Movies Found"}
        </section>
      )}
    </>
  );
}

export default Movies;
