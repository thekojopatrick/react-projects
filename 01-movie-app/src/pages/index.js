import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./Home/Movies";
import TvShows from "./Home/TvShows";
import Watchlist from "./Home/Watchlist";
import Search from "./Home/Search";
import { MovieDetails } from "../container";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:type" element={<Movies />} />
      <Route path="/tv/:type" element={<TvShows />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/search/:search" element={<Search />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default Pages;
