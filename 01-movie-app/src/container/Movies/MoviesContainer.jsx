import { Link } from "react-router-dom";
import { Grid, MovieCard } from "../../components";
import { AnimatePresence } from "framer-motion";

const Movies = ({ movies }) => {
  return (
    <section className="space-y-8 p-4 text-center">
      <h2 className="text-2xl text-left mx-4">
        All <span className="text-sm">({movies.length})</span>
      </h2>
      <Grid layout>
        <AnimatePresence>
          {/* Randomize movie list */}
          {movies
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => {
              const {
                id,
                original_title,
                original_name,
                poster_path,
                vote_average,
                media_type,
              } = value;

              const name = original_name || original_title;
              const replaceEmtStr = (name) => name.replace(/\s/g, "-");
              return (
                <Link
                  key={id}
                  to={`/s/${media_type}/${id}-${replaceEmtStr(name)}`}
                >
                  <MovieCard
                    key={id}
                    img={poster_path}
                    title={original_title || original_name}
                    rating={vote_average}
                  />
                </Link>
              );
            })}

          {/* {movies.map((movie) => {
          const { id, original_title, poster_path, vote_average } = movie;
          return (
            <MovieCard
              key={id}
              img={poster_path}
              title={original_title}
              rating={vote_average}
            />
          );
        })} */}
        </AnimatePresence>
      </Grid>
    </section>
  );
};

export default Movies;
