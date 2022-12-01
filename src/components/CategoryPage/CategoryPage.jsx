import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import HomeSectionSlide from "../home/HomeSectionSlide";

export default function CategoryPage() {
  const [list, setList] = useState([]);
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("mediaType");
  const categoryList = searchParams.get("categoryList");
  const sectionSizeLimit = 30;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${categoryList}?api_key=982f680fcfc113f532f791142a6598c1&language=en-US&page=1`
      )
      .then((res) => {
        const persons = res.data;
        setList(persons.results.slice(0, sectionSizeLimit));
      });
  }, []);

  function slides() {
    const newList = list.map((element, index) => {
      return <HomeSectionSlide key={index} item={element} />;
    });
    return newList;
  }

  return (
    <div className="home-section">
      <header className="section-header">
        <h1>{categoryList}</h1>
        <span
          className={`header-category ${
            mediaType === "movie" ? "" : "header-category-tv"
          }`}
        >
          {mediaType === "movie" ? "Movies" : "TV series"}
        </span>
        <button>see more</button>
      </header>
      <div className="display-map">{slides()}</div>
    </div>
  );
}
