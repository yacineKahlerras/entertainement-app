import React, { useEffect, useState } from "react";
import HomeSectionSlide from "./HomeSectionSlide";
import axios from "axios";
import { trackWindowScroll } from "react-lazy-load-image-component";
import LoadingCircle from "../loading/LoadingCircle";
import Link from "next/link";

function HomeSection(props) {
  const [list, setList] = useState([]);
  const { headerTitle, mediaType, linkKeyword, sectionSizeLimit } = props;

  useEffect(() => {
    axios
      .post(`/api/group`, { mediaType: mediaType, linkKeyword: linkKeyword })
      .then((res) => {
        const persons = res.data;
        setList(persons.results.slice(0, sectionSizeLimit));
      });
  }, []);

  function slides() {
    if (!list.length) return <LoadingCircle />;
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
            mediaType === "movie" ? "" : "header-category-tv"
          }`}
        >
          {mediaType === "movie" ? "Movies" : "TV series"}
        </span>
        <Link
          href={`/category/?categoryName=${linkKeyword}&mediaType=${mediaType}`}
        >
          <button>see more</button>
        </Link>
      </header>
      <div className="display-map">{slides()}</div>
    </div>
  );
}

export default trackWindowScroll(HomeSection);
