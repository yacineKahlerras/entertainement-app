import React from "react";
import HomeSectionSlide from "./HomeSectionSlide";

export default function HomeSection(props) {
  const { headerTitle, category, list } = props;

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
        <span className="header-category">{category}</span>
        <button>see more</button>
      </header>
      <div className="display-map">{slides()}</div>
    </div>
  );
}
