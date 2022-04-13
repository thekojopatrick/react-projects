const ImagePath = "https://image.tmdb.org/t/p/";
const ImagePlaceholder = "https://via.placeholder.com/500x750";
// const tabs = ["All", "Movies", "Tv Shows"];

const tabs = [
  { title: "All", value: "All" },
  { title: "Movies", value: "movie" },
  { title: "Tv Shows", value: "tv" },
];
const SubCategories = [
  { title: "Popular", value: "/popular" },
  { title: "Upcoming", value: "/upcoming" },
  { title: "Top rated", value: "/top_rated" },
];
const Navlinks = [
  { title: "Movies", route: "/movie/discover" },
  { title: "TV Shows", route: "/tv/discover" },
  { title: "Watchlist", route: "/watchlist" },
];

export { tabs, Navlinks, SubCategories, ImagePath, ImagePlaceholder };
