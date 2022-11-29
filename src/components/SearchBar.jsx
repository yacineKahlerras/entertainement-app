import React from "react";
import searchIcon from "../assets/icon-search.svg";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <img src={searchIcon} alt="search icon"></img>
      <input placeholder="Search for movies or TVs"></input>
      <button>search</button>
    </div>
  );
}
