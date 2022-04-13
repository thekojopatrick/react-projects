import Home from "./Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Movies from "./Home/Movies";
import TvShows from "./Home/TvShows";
import Watchlist from "./Home/Watchlist";
import Search from "./Home/Search";
import { MovieDetails } from "../container";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:type" element={<Movies />} />
        <Route path="/tv/:type" element={<TvShows />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/s/:route/:id" element={<MovieDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
