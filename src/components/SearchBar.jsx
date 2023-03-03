import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import searchIcon from "../assets/icon-search.svg";

export default function SearchBar(props) {
  // const submit = useSubmit();
  const router = useRouter();
  const { query } = router.query;
  const searchBarRef = useRef();

  useEffect(() => {
    searchBarRef.current.value = query ? query : "";
  }, [query]);

  function handleInput(e) {
    router.replace({
      query: { ...router.query, query: String(e.target.value) },
    });
  }

  return (
    <div className="searchBar-container">
      <div className="searchBar">
        <Image src={searchIcon} alt="search icon" />
        <form id="search-form">
          <input
            ref={searchBarRef}
            id="query"
            aria-label="Search movies/tv-shows"
            type="search"
            placeholder="Search for movies or TVs"
            defaultValue={query}
            name="query"
            onChange={handleInput}
          />
          <button>search</button>
        </form>
      </div>
    </div>
  );
}
