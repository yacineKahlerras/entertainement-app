import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetTitle } from "./CategoryPageMethods";
import CategorySelector from "./CategorySelector";
import PageNavigations from "./PageNavigations";
import { CategoryPageSlides } from "./CategoryPageSlides";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const query = router.query;
  const { categoryName, mediaType, isGenres, pageIdx } = query;

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const [pagesCount, setPagesCount] = useState(0);
  const [genresList, setGenresList] = useState([]);

  // gets the genres list
  function FetchGenres() {
    if (!mediaType) return;
    const genresMediaType = mediaType === "all" ? "movie" : mediaType;
    axios.post("/api/genres", { genresMediaType }).then((res) => {
      const data = res.data;
      setGenresList(data.genres);
    });
  }

  // gets the list of the things
  function GetItemsList() {
    if (!mediaType) return;
    axios
      .post("/api/categoryList", {
        mediaType,
        categoryName,
        page,
        genresList,
        isGenres,
      })
      .then((res) => {
        const data = res.data;
        setPagesCount(data.total_pages);
        setList(data.results);
      });
  }

  useEffect(() => {
    GetItemsList();
  }, [genresList]);

  useEffect(() => {
    FetchGenres();
    setPage(1);
    setList([]);
  }, [categoryName]);

  useEffect(() => {
    FetchGenres();
    setList([]);
  }, [page]);

  function changePage(increment = 1) {
    const newPageIndex = page + increment;
    if (newPageIndex < 1 || newPageIndex > pagesCount) return;
    setPage(newPageIndex);
    router.replace({
      query: { ...router.query, pageIdx: parseInt(newPageIndex) },
    });
  }

  useEffect(() => {
    if (pageIdx) setPage(parseInt(pageIdx));
  }, [query]);

  return (
    <div className="home-section category-section">
      {/* section header */}
      <header className="section-header">
        <h1>{GetTitle(categoryName, genresList)}</h1>
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

      {/* next and previous page buttons */}
      <PageNavigations
        changePage={changePage}
        page={page}
        pagesCount={pagesCount}
      />

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
