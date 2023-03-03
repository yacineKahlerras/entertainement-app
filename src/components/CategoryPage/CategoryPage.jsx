import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetTitle, GetFetchLink } from "./CategoryPageMethods";
import CategorySelector from "./CategorySelector";
import PageNavigations from "./PageNavigations";
import { api_key } from "../../App";
import { CategoryPageSlides } from "./CategoryPageSlides";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const query = router.query;
  const { categoryName, mediaType, isGenres } = query;

  const [list, setList] = useState([]);
  const [page, setPage] = useState(query.page ? query.page : 1);

  const [pagesCount, setPagesCount] = useState(0);
  const [genresList, setGenresList] = useState([]);

  // gets the genres list
  function FetchGenres() {
    if (!mediaType) return;
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
    if (!mediaType) return;
    const fetchedLink = GetFetchLink({
      mediaType,
      categoryName: categoryName,
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
      query: { ...router.query, page: parseInt(newPageIndex) },
    });
  }

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
