import React, { useState, useEffect } from "react";
import axios from "axios";
import PageNavigations from "../CategoryPage/PageNavigations";
import { api_key } from "../../App";
import { SearchPageSlides } from "../CategoryPage/CategoryPageSlides";
import { useSearchParams } from "react-router-dom";
import LoadingCircle from "../loading/LoadingCircle";

export default function SearchPage(props) {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );
  const [pagesCount, setPagesCount] = useState(0);
  const { query } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GetItemsList();
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }, [query, page]);

  // gets the list of the things
  function GetItemsList() {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`
      )
      .then((res) => {
        const data = res.data;
        setPagesCount(data.total_pages);
        setList(data.results);
        setIsLoading(false);
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
        <h1>Searching : {query}</h1>
        <span className={`header-category `}>{"All"}</span>
        <div style={{ display: isLoading ? "block" : "none" }}>
          <LoadingCircle size={40} />
        </div>
      </header>

      {/* pages slides */}
      <div className="display-map">{SearchPageSlides(list)}</div>

      {/* next and previous page buttons */}
      <PageNavigations
        changePage={changePage}
        page={page}
        pagesCount={pagesCount}
      />
    </div>
  );
}
