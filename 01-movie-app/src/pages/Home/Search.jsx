import React from "react";
import { SHeader, Search as SearchForm, Grid } from "../../components";

function Search() {
  return (
    <section className="mt-10">
      <SHeader>Search</SHeader>
      <SearchForm />
      <Grid></Grid>
    </section>
  );
}

export default Search;
