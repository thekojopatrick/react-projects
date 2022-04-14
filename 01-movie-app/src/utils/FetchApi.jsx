let results = "";
let requestOptions = {
  method: "GET",
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let query = "";
const params = {
  api_key: process.env.REACT_APP_API_KEY,
  query: query,
};

const makeRequest = async (url, query) => {
  const res = await fetch(
    (url += "?" + new URLSearchParams(params).toString() + query),
    requestOptions,
    headers
  );
  const data = res.json();
  return data;
};

const getTrending = async () => {
  const data = await makeRequest(
    `https://api.themoviedb.org/3/trending/all/week`
  );
  results = data.results;
  return results;
};

const getMovies = async () => {
  const data = await makeRequest(`https://api.themoviedb.org/3/discover/movie`);
  results = data.results;
  results.forEach((movie) => {
    movie["media_type"] = "movie";
  });
  //console.log(movies);
  return results;
};

const getShows = async () => {
  const data = await makeRequest(`https://api.themoviedb.org/3/discover/tv`);
  results = data.results;
  results.forEach((tv) => {
    tv["media_type"] = "tv";
  });
  //console.log(results);
  return results;
};

const getSearchResult = async (name) => {
  const data = await makeRequest(
    `https://api.themoviedb.org/3/search/multi/`,
    name
  );
  results = data.results;
  //console.log(results);
  return results;
};

const getMovieDetails = async (id, route) => {
  const data = await makeRequest(`https://api.themoviedb.org/3/${route}/${id}`);
  results = data.results;
  //console.log(results);
  return results;
};

export {
  makeRequest,
  getMovies,
  getShows,
  getSearchResult,
  getMovieDetails,
  getTrending,
};
