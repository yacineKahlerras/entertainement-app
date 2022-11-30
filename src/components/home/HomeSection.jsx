import React from "react";
import HomeSectionSlide from "./HomeSectionSlide";

export default function HomeSection(props) {
  const { headerTitle, category, list } = props;

  function slides() {
    const newList = list.map((element, index) => {
      const { backdrop_path, title, release_date, video } = element;
      return (
        <HomeSectionSlide
          key={index}
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          title={title}
          genre={video === false ? "movie" : "TV Series"}
          year={release_date}
        />
      );
    });
    return newList;
  }

  return (
    <div className="home-section">
      <header className="section-header">
        <h1>{headerTitle}</h1>
        <span className="header-category">{category}</span>
        <button>see more</button>
      </header>
      <div className="display-map">{slides()}</div>
    </div>
  );
}
