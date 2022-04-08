import { Category, Search, SHeader } from "../../components";
import { SubCategories } from "../../constants/data";
import { MoviesContainer } from "../../container";

function TvShows() {
  return (
    <section className="mt-10">
      <SHeader>Tv Shows</SHeader>
      <section className="tabs-search flex justify-between items-center my-10">
        <Category section="tv" categories={SubCategories} />
        <Search />
      </section>
      <MoviesContainer />
    </section>
  );
}

export default TvShows;
