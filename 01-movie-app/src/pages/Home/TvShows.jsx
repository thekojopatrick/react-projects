import { Category, Loading, Search, SHeader } from "../../components";
import { SubCategories } from "../../constants/data";
import { MoviesContainer } from "../../container";
import { useEffect, useState, createContext } from "react";
import makeRequest from "../../utils/FetchApi";

export const TvShowContext = createContext(null);

const TvShows = () => {
  const [tvshows, setTvshows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    const data = await makeRequest(
      `https://api.themoviedb.org/3/discover/tv`
    ).catch((err) => {
      console.log(err);
    });

    setTimeout(() => {
      let tv = data.results;
      tv.forEach((tv) => {
        tv["media_type"] = "tv";
      });
      setTvshows(tv);
      //console.log(tv);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <TvShowContext.Provider value={{ setTvshows }}>
          <>
            <section className="mt-10 m-4">
              <SHeader>Tv Shows</SHeader>
              <section className="tabs-search flex flex-col-reverse md:flex-row md:justify-between items-center my-10">
                {/* <Category section="tv" categories={SubCategories} /> */}
                <Search />
              </section>
              {tvshows ? (
                <MoviesContainer movies={tvshows} />
              ) : (
                "No Tv Shows Found"
              )}
            </section>
          </>
        </TvShowContext.Provider>
      )}
    </>
  );
};

export default TvShows;
