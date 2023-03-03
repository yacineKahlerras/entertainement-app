import Image from "next/image";
import React, { useEffect } from "react";
// import { Form, useLoaderData, useSubmit } from "react-router-dom";
import searchIcon from "../assets/icon-search.svg";

export default function SearchBar(props) {
  // const submit = useSubmit();

  // useEffect(() => {
  //   document.getElementById("query").value = query;
  // }, [query]);

  return (
    <div className="searchBar-container">
      <div className="searchBar">
        <Image src={searchIcon} alt="search icon" />
        <form id="search-form">
          <input
            id="query"
            aria-label="Search movies/tv-shows"
            type="search"
            placeholder="Search for movies or TVs"
            // defaultValue={query}
            name="query"
            // onChange={(event) => {
            //   submit(event.currentTarget.form);
            // }}
          />
          <button>search</button>
        </form>
      </div>
    </div>
  );
}
