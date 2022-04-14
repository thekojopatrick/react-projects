/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { Category, Search, SHeader, Loading } from "../../components";
import { SubCategories } from "../../constants/data";
import { MoviesContainer } from "../../container";
import { getMovies } from "../../utils/FetchApi";

const Movies = () => {
  const { movies, filter, setMovies, isLoading, setIsLoading } =
    useContext(AppContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setIsLoading(true);
    const data = await getMovies().catch((err) => {
      console.log(err);
    });
    setTimeout(() => {
      setMovies(data);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <section className="mt-10 m-4">
          <SHeader>Movies{filter && ` : ${filter}`}</SHeader>
          <section className="tabs-search flex flex-col-reverse md:flex-row md:justify-between items-center my-10">
            <Category section="movie" categories={SubCategories} />
            <Search />
          </section>
          {movies ? (
            <MoviesContainer movies={movies} filter={filter} />
          ) : (
            "No Movies Found"
          )}
        </section>
      )}
    </>
  );
};

export default Movies;
