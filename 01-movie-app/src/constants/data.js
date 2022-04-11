const ImagePath = "https://image.tmdb.org/t/p/";
const ImagePlaceholder = "https://via.placeholder.com/500x750";
const tabs = ["All", "Movies", "Tv Shows"];

const SubCategories = [
  { title: "Popular", route: "/popular" },
  { title: "Upcoming", route: "/upcoming" },
  { title: "Top rated", route: "/top_rated" },
];
const Navlinks = [
  { title: "Movies", route: "/movie/discover" },
  { title: "TV Shows", route: "/tv/discover" },
  { title: "Watchlist", route: "/watchlist" },
];

export { tabs, Navlinks, SubCategories,ImagePath,ImagePlaceholder };
