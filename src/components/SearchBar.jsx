import React, { useEffect } from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
import searchIcon from "../assets/icon-search.svg";

export default function SearchBar(props) {
  const submit = useSubmit();
  const { query } = props;

  useEffect(() => {
    document.getElementById("query").value = query;
  }, [query]);

  return (
    <div className="searchBar-container">
      <div className="searchBar">
        <img src={searchIcon} alt="search icon"></img>
        <Form id="search-form" role="search">
          <input
            id="query"
            aria-label="Search movies/tv-shows"
            type="search"
            placeholder="Search for movies or TVs"
            defaultValue={query}
            name="query"
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
          <button>search</button>
        </Form>
      </div>
    </div>
  );
}
