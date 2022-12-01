import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import HomeSectionSlide from "../home/HomeSectionSlide";
import { GetTitle } from "./CategoryPageMethods";
import leftArrowIcon from "../../assets/arrow-left-short.svg";
import rightArrowIcon from "../../assets/arrow-right-short.svg";

export default function CategoryPage() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);

  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("mediaType");
  const categoryList = searchParams.get("categoryList");

  useEffect(() => {
    setPage(searchParams.get("page") ? searchParams.get("page") : 1);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${categoryList}?api_key=982f680fcfc113f532f791142a6598c1&language=en-US&page=${page}`
      )
      .then((res) => {
        const data = res.data;
        setPagesCount(data.total_pages);
        setList(data.results);
      });
  }, [page]);

  function changePage(increment = 1) {
    const newPageIndex = page + increment;
    if (newPageIndex < 1 || newPageIndex > pagesCount) return;
    setPage(newPageIndex);
    window.scrollTo(0, 0);
  }

  return (
    <div className="home-section category-section">
      <header className="section-header">
        <h1>{GetTitle(categoryList)}</h1>
        <span
          className={`header-category ${
            mediaType === "movie" ? "" : "header-category-tv"
          }`}
        >
          {mediaType === "movie" ? "Movies" : "TV series"}
        </span>
      </header>

      {/* pages slides */}
      <div className="display-map">{slides(list)}</div>

      {/* next and previous page buttons */}
      <div className="page-buttons-container">
        <button
          onClick={() => {
            changePage(-1);
          }}
          className="page-button prev-page-button"
        >
          <img src={leftArrowIcon} alt="left arrow icon" /> Prev
        </button>
        <span className="pages-count">
          Page {page} of {pagesCount}
        </span>
        <button
          onClick={() => {
            changePage();
          }}
          className="page-button next-page-button"
        >
          Next <img src={rightArrowIcon} alt="left arrow icon" />
        </button>
      </div>
    </div>
  );
}

function slides(list) {
  const newList = list.map((element, index) => {
    return <HomeSectionSlide key={index} item={element} />;
  });
  return newList;
}
