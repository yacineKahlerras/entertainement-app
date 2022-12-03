import React from "react";
import HomeSectionSlide from "../home/HomeSectionSlide";

export default function CategoryPageSlides(list) {
  const newList = list.map((element, index) => {
    if (element.media_type === "movie" || element.media_type === "tv")
      return <HomeSectionSlide key={index} item={element} />;
  });
  return newList;
}
