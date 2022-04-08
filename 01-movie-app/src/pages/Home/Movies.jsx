import { Category, Search, SHeader } from "../../components";
import { SubCategories } from "../../constants/data";
import { MoviesContainer } from "../../container";

function Movies() {
  return (
    <section className="mt-10">
      <SHeader>Movies</SHeader>
      <section className="tabs-search flex justify-between items-center my-10">
        <Category section="movie" categories={SubCategories} />
        <Search />
      </section>
      <MoviesContainer />
    </section>
  );
}

export default Movies;
