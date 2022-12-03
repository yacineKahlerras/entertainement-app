import React, { useState, useEffect } from "react";
import axios from "axios";
import PageNavigations from "../CategoryPage/PageNavigations";
import { api_key } from "../../App";
import CategoryPageSlides from "../CategoryPage/CategoryPageSlides";

export default function SearchPage() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);

  // gets the list of the things
  function GetItemsList() {
    const fetchedLink = GetFetchLink({
      mediaType,
      categoryName,
      page,
      genresList,
      isGenres,
    });
    if (fetchedLink)
      axios.get(fetchedLink).then((res) => {
        const data = res.data;
        setPagesCount(data.total_pages);
        setList(data.results);
      });
  }

  function changePage(increment = 1) {
    const newPageIndex = page + increment;
    if (newPageIndex < 1 || newPageIndex > pagesCount) return;
    setPage(newPageIndex);
    window.scrollTo(0, 0);
  }

  return (
    <div className="home-section category-section">
      {/* section header */}
      <header className="section-header">
        <h1>Search</h1>
        <span className={`header-category `}>{"All"}</span>
      </header>

      {/* pages slides */}
      <div className="display-map">{CategoryPageSlides(list)}</div>

      {/* next and previous page buttons */}
      <PageNavigations
        changePage={changePage}
        page={page}
        pagesCount={pagesCount}
      />
    </div>
  );
}
