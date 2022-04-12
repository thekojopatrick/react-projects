import React from "react";
import { Link } from "react-router-dom";
import { Grid, MovieCard } from "../../components";

const Movies = ({ movies }) => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl">
        All <span className="text-sm">({movies.length})</span>
      </h2>
      <Grid>
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

            let name = original_name || original_title;
            return (
              <Link
                key={id}
                to={`/s/${media_type}/${id}-${name.replace(/\s/g, "-")}`}
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
      </Grid>
    </section>
  );
};

export default Movies;
