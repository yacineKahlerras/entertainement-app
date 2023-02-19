import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { GetTitle, GetFetchLink } from "./CategoryPageMethods";
import CategorySelector from "./CategorySelector";
import PageNavigations from "./PageNavigations";
import { api_key } from "../../App";
import { CategoryPageSlides } from "./CategoryPageSlides";
import { useRef } from "react";

export default function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
  );
  const [pagesCount, setPagesCount] = useState(0);
  const [genresList, setGenresList] = useState([]);

  const categoryName = useRef(String(searchParams.get("categoryName")));
  const mediaType = searchParams.get("mediaType");
  const isGenres = searchParams.get("isGenres");

  // gets the genres list
  function FetchGenres() {
    const genresMediaType = mediaType === "all" ? "movie" : mediaType;
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${genresMediaType}/list?api_key=${api_key}&language=en-US`
      )
      .then((res) => {
        const data = res.data;
        setGenresList(data.genres);
      });
  }

  // gets the list of the things
  function GetItemsList() {
    const fetchedLink = GetFetchLink({
      mediaType,
      categoryName: categoryName.current,
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

  useEffect(() => {
    GetItemsList();
  }, [genresList]);

  if (categoryName.current !== searchParams.get("categoryName")) {
    categoryName.current = searchParams.get("categoryName");
    FetchGenres();
    setPage(1);
    setList([]);
  }

  useEffect(() => {
    FetchGenres();
    setSearchParams(searchParams);
    setList([]);
  }, [page]);

  function changePage(increment = 1) {
    const newPageIndex = page + increment;
    if (newPageIndex < 1 || newPageIndex > pagesCount) return;
    setPage(newPageIndex);
    searchParams.set("page", parseInt(newPageIndex));
    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  }

  return (
    <div className="home-section category-section">
      {/* section header */}
      <header className="section-header">
        <h1>{GetTitle(categoryName.current, genresList)}</h1>
        <span
          className={`header-category ${
            mediaType === "movie" ? "" : "header-category-tv"
          }`}
        >
          {mediaType === "movie"
            ? "Movies"
            : mediaType === "tv"
            ? "TV series"
            : "All"}
        </span>
        <CategorySelector
          mediaType={mediaType === "all" ? "movie" : mediaType}
          genresList={genresList}
        />
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
