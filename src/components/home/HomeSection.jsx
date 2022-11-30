import React, { useEffect, useState } from "react";
import HomeSectionSlide from "./HomeSectionSlide";
import axios from "axios";

export default function HomeSection(props) {
  const [list, setList] = useState([]);
  const { headerTitle, category, linkKeyword, sectionSizeLimit } = props;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${category}/${linkKeyword}?api_key=982f680fcfc113f532f791142a6598c1&language=en-US&page=1`
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
        <h1>{headerTitle}</h1>
        <span
          className={`header-category ${
            category === "movie" ? "" : "header-category-tv"
          }`}
        >
          {category === "movie" ? "Movies" : "TV series"}
        </span>
        <button>see more</button>
      </header>
      <div className="display-map">{slides()}</div>
    </div>
  );
}
