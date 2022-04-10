const IMAGE_PATH = "https://image.tmdb.org/t/p/";

const tabs = ["All", "Movies", "Tv Shows"];

const SubCategories = [
  { title: "Popular", route: "/popular" },
  { title: "Upcoming", route: "/upcoming" },
  { title: "Top rated", route: "/top_rated" },
];
const navlinks = [
  { title: "Movies", route: "/movie/discover" },
  { title: "TV Shows", route: "/tv/discover" },
  { title: "Watchlist", route: "/watchlist" },
];

export { tabs, navlinks, SubCategories,IMAGE_PATH };
