import React from "react";
import { MovieCard } from "../../components";

const Movies = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl">
        All <span className="text-sm">(120)</span>
      </h2>
      <MovieCard  />
    </section>
  );
};

export default Movies;
