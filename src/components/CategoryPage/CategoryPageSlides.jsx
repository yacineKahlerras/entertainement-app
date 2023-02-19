import React from "react";
import HomeSectionSlide from "../home/HomeSectionSlide";
import LoadingCircle from "../loading/LoadingCircle";

export function CategoryPageSlides(list) {
  if (!list.length) return <LoadingCircle />;
  const newList = list.map((element, index) => {
    return <HomeSectionSlide key={index} item={element} />;
  });
  return newList;
}

export function SearchPageSlides(list) {
  if (!list.length) return <LoadingCircle />;
  const newList = list.map((element, index) => {
    if (element.media_type === "movie" || element.media_type === "tv")
      return <HomeSectionSlide key={index} item={element} />;
  });
  return newList;
}
