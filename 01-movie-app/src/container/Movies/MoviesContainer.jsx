import React from "react";
import { Grid, MovieCard } from "../../components";

const Movies = ({ movies }) => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl">
        All <span className="text-sm">(120)</span>
      </h2>
      <Grid>
        {movies
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => {
            const { id, original_title, poster_path, vote_average } = value;
            return (
              <MovieCard
                key={id}
                img={poster_path}
                title={original_title}
                rating={vote_average}
              />
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
