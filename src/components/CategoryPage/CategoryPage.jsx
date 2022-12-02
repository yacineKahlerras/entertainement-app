import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import HomeSectionSlide from "../home/HomeSectionSlide";
import { GetTitle } from "./CategoryPageMethods";
import leftArrowIcon from "../../assets/arrow-left-short.svg";
import rightArrowIcon from "../../assets/arrow-right-short.svg";
import CategorySelector from "./CategorySelector";
import PageNavigations from "./PageNavigations";

export default function CategoryPage() {
  const [searchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);

  const mediaType = searchParams.get("mediaType");
  const categoryList = searchParams.get("categoryList");

  useEffect(() => {
    FetchData();
    setPage(1);
  }, [categoryList]);

  useEffect(() => {
    FetchData();
  }, [page]);

  function FetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${categoryList}?api_key=982f680fcfc113f532f791142a6598c1&language=en-US&page=${page}`
      )
      .then((res) => {
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
        <h1>{GetTitle(categoryList)}</h1>
        <span
          className={`header-category ${
            mediaType === "movie" ? "" : "header-category-tv"
          }`}
        >
          {mediaType === "movie" ? "Movies" : "TV series"}
        </span>
        <CategorySelector mediaType={mediaType} />
      </header>

      {/* pages slides */}
      <div className="display-map">{slides(list)}</div>

      {/* next and previous page buttons */}
      <PageNavigations
        changePage={changePage}
        page={page}
        pagesCount={pagesCount}
      />
    </div>
  );
}

function slides(list) {
  const newList = list.map((element, index) => {
    return <HomeSectionSlide key={index} item={element} />;
  });
  return newList;
}
