import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FiStar, FiArrowLeft } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../../App";
import { Spinner } from "../../components";
import { ImagePath, ImagePlaceholder } from "../../constants/data";
import { getMovieDetails } from "../../utils/FetchApi";

const MovieDetails = () => {
  const { isLoading, setIsLoading, isError, setError } = useContext(AppContext);
  const [movieDetails, setMovieDetails] = useState([]);

  const { id, route } = useParams();

  useEffect(() => {
    fetchDetails(id, route);
  }, [id, route]);

  const fetchDetails = async (id, route) => {
    const data = await getMovieDetails(id, route).catch((err) => {
      setError("Please check your internet connection and Reload Page");
      console.log(`KP-Error:${err}`);
    });
    setTimeout(() => {
      setMovieDetails(data);
      setIsLoading(false);
    }, 3000);
  };

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
    <>
      {isError && (
        <div className="text-center w-full h-full text-white">{isError}</div>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="my-10 p-4">
          <div className="h-[40rem] mb-40">
            <img
              loading="lazy"
              className="hero-banner__img"
              src={`${ImagePath}w1280${backdrop_path}`}
              alt="Movie Banner"
            />
            <div
              style={{ background: "#20283ecc" }}
              className="transform -translate-y-24 md:translate-x-20 mb-40 backdrop-blur-xl rounded-2xl p-10 inline-block"
            >
              <span className="route flex items-center tracking-wide text-amber-400 capitalize">
                <Link to={"/"} className="flex items-center">
                  <FiArrowLeft />
                  Movie App
                </Link>{" "}
                / {route}
              </span>
              <h1 className="hero-banner__title">{name}</h1>
            </div>
          </div>
          <div className="flex p-4 flex-col place-items-center justify-center w-full md:flex-row gap-16">
            <img
              loading="lazy"
              className="rounded-2xl"
              src={
                poster_path
                  ? `${ImagePath}w500${poster_path}`
                  : `${ImagePlaceholder}`
              }
              alt="Poster"
            />

            <div className="space-y-4 md:w-1/2 ">
              <h2 className="text-xl font-bold">{tagline}</h2>
              <p className="w-full md:w-2/3">{overview}</p>
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
      )}
    </>
  );
};

export default MovieDetails;
