import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SHeader, Search as SearchForm, Grid } from "../../components";
import { MoviesContainer } from "../../container";
import makeRequest from "../../utils/FetchApi";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  let params = useParams();

  const getSearchResult = async () => {
    const data = await makeRequest(
      `https://api.themoviedb.org/3/search/multi/`,
      params.search
    );
    console.log(data.results);
    setSearchResults(data.results);
  };

  useEffect(() => {
    getSearchResult();   
    // navigate("/search/" + params.search);
    console.log(params);
  }, []);
  

  return (
    <section className="mt-10">
      <SHeader>Search</SHeader>
      <SearchForm />
      <Grid>
        {searchResults ? (
          <MoviesContainer movies={searchResults} />
        ) : (
          "No Search Result"
        )}
      </Grid>
    </section>
  );
}

export default Search;
