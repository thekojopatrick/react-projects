import React from "react";
import { MovieCard } from "../../components";
import { movie1, movie2 } from "../../constants/images";

const Movies = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl">
        All <span className="text-sm">(120)</span>
      </h2>
      <div className="flex flex-wrap gap-4">
        <MovieCard img={movie1} title={"Black Widow"} rating={"6.8"} />
        <MovieCard img={movie2} title={"Black Widow"} rating={"9.8"} />
        <MovieCard img={movie1} title={"Black Widow"} rating={"6.8"} />
        <MovieCard img={movie2} title={"Black Widow"} rating={"9.8"} />
        <MovieCard img={movie1} title={"Black Widow"} rating={"6.8"} />
        <MovieCard img={movie2} title={"Black Widow"} rating={"9.8"} />
      </div>
    </section>
  );
};

export default Movies;
