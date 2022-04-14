import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SHeader, Search as SearchForm, Grid } from "../../components";
import { MoviesContainer } from "../../container";
import { getSearchResult } from "../../utils/FetchApi";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  let params = useParams();

  const fetchSearchResult = async (name) => {
    const data = await getSearchResult(name);
    setSearchResults(data);
  };

  useEffect(() => {
    fetchSearchResult(params.search);
  }, [params.search]);

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
