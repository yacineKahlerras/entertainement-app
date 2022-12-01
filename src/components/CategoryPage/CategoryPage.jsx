import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import HomeSectionSlide from "../home/HomeSectionSlide";
import { GetTitle } from "./CategoryPageMethods";

export default function CategoryPage() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

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
        const persons = res.data;
        setList(persons.results);
      });
  }, []);

  function slides() {
    const newList = list.map((element, index) => {
      return <HomeSectionSlide key={index} item={element} />;
    });
    return newList;
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
      <div className="display-map">{slides()}</div>
    </div>
  );
}
