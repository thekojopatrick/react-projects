/* eslint-disable react-hooks/exhaustive-deps */
import { Category, Loading, Search, SHeader } from "../../components";
import { SubCategories } from "../../constants/data";
import { MoviesContainer } from "../../container";
import { useEffect, useContext } from "react";
import { getShows } from "../../utils/FetchApi";
import { AppContext } from "../../App";

const TvShows = () => {
  const { tvshows, setTvshows, isLoading, setIsLoading, filter } =
    useContext(AppContext);

  useEffect(() => {
    getTvshows();
  }, []);

  async function getTvshows() {
    setIsLoading(true);
    const data = await getShows();
    setTimeout(() => {
      setTvshows(data);
      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="mt-10 m-4">
          <SHeader>Tv Shows{filter && ` : ${filter}`}</SHeader>
          <section className="tabs-search flex flex-col-reverse md:flex-row md:justify-between items-center my-10">
            <Category section="tv" categories={SubCategories} />
            <Search />
          </section>
          {tvshows ? <MoviesContainer movies={tvshows} /> : "No Tv Shows Found"}
        </section>
      )}
    </>
  );
};

export default TvShows;
