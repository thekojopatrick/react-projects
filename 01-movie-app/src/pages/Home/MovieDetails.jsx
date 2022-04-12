import React, { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import { ImagePath } from "../../constants/data";
import makeRequest from "../../utils/FetchApi";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id, route } = useParams();

  const fetchDetails = async (id, route) => {
    const data = await makeRequest(
      `https://api.themoviedb.org/3/${route}/${id}`
    );
    console.log(data);
    setMovieDetails(data);
  };

  useEffect(() => {
    fetchDetails(id, route);
  }, [id, route]);

  const {
    backdrop_path,
    poster_path,
    original_title,
    original_name,
    title,
    overview,
    vote_average,
    genres,
    tagline,
    status,
    release_date,
  } = movieDetails;

  const name = title || original_name || original_title;

  return (
    <div className="my-10 p-4">
      <div className="h-[40rem] mb-40">
        <img
          loading="lazy"
          className="hero-banner__img"
          src={`${ImagePath}w1280${backdrop_path}`}
          alt="Movie Banner"
        />
        <div className="transform -translate-y-24 md:translate-x-20 mb-40 bg-gray-800 bg-opacity-80 backdrop-blur-xl rounded-2xl p-10 inline-block">
          <span className="route tracking-wide text-amber-400 capitalize">
            <Link to={"/"}>&copy;Movie App</Link> / {route}
          </span>
          <h1 className="hero-banner__title">{name}</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <img
          loading="lazy"
          className="rounded-2xl"
          src={`${ImagePath}w500${poster_path}`}
          alt="Movie Banner"
        />
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{tagline}</h2>
          <p className="w-full md:w-1/2">{overview}</p>
          <div className="rating inline-flex items-center p-2 rounded-xl leading-relaxed gap-1 text-amber-400 bg-black ">
            <FiStar />
            {vote_average}
          </div>
          <div className="type flex flex-col gap-y-1">
            <span>Type</span>
            <p className="text-lg capitalize">{route}</p>
          </div>
          <div className="type flex flex-col gap-y-1">
            <span>Release Date</span>
            <p className="text-lg capitalize">{release_date}</p>
          </div>
          <div className="type flex flex-col gap-y-1">
            <span>Status</span>
            <p className="text-lg capitalize">{status}</p>
          </div>
          {genres && (
            <div className="type flex flex-col gap-y-1">
              <span>Genres</span>
              <div className="space-x-2">
                {genres.map((genre) => {
                  const { id, name } = genre;
                  return (
                    <span className="text-lg capitalize" key={id}>
                      {name},
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
