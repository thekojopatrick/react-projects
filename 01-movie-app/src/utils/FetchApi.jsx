let results = "";
let requestOptions = {
  method: "GET",
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const url = (path) => `https://api.themoviedb.org/3/${path}`;
const params = {
  api_key: process.env.REACT_APP_API_KEY,
};

const makeRequest = async (path, query="") => {
  const res = await fetch(
    `https://api.themoviedb.org/3${path}?api_key=${process.env.REACT_APP_API_KEY}`+
    `&query=${query}`,
    requestOptions,
    headers
  );
  const data = res.json();
  return data;
};

const getTrending = async () => {
  const data = await makeRequest(`/trending/all/week`);
  results = data.results;
  return results;
};

const getMovies = async () => {
  const data = await makeRequest(`/discover/movie`);
  results = data.results;
  results.forEach((movie) => {
    movie["media_type"] = "movie";
  });
  //console.log(movies);
  return results;
};

const getShows = async () => {
  const data = await makeRequest(`/discover/tv`);
  results = data.results;
  results.forEach((tv) => {
    tv["media_type"] = "tv";
  });
  //console.log(results);
  return results;
};

const getSearchResult = async (name) => {
  const data = await makeRequest(`/search/multi`, name);
  results = data.results;
  //console.log(results);
  return results;
};

const getMovieDetails = async (id, route) => {
  const data = await makeRequest(`/${route}/${id}`);
  return data;
};

export {
  makeRequest,
  getMovies,
  getShows,
  getSearchResult,
  getMovieDetails,
  getTrending,
};
