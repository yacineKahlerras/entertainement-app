import { sectionData } from "../Home";
import { api_key } from "../../App";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/** gets the title of the section */
export function GetTitle(categoryList) {
  if (categoryList === "trending") return "Trending";
  for (let i = 0; i < sectionData.length; i++) {
    if (categoryList === sectionData[i].linkKeyword)
      return sectionData[i].title;
  }
}

/** return the dropdown buttons with links to pages
 *  from that media type
 */
export function DropDownElements(props) {
  const { mediaType, genresList } = props;

  const dropDownLinks = sectionData.map((element) => {
    if (element.mediaType === mediaType)
      return (
        <Link
          key={element.title}
          to={`/category/?categoryList=${element.linkKeyword}&mediaType=${mediaType}`}
        >
          {element.title}
        </Link>
      );
  });
  dropDownLinks.push(
    <Link
      key={"Trending"}
      to={`/category/?categoryList=trending&mediaType=${
        mediaType === "all" ? "all" : mediaType
      }`}
    >
      Trending
    </Link>
  );
  for (let i = 0; i < genresList.length; i++) {
    dropDownLinks.push(
      <Link
        key={genresList[i].name}
        to={`/category/?categoryList=${genresList[i].name}&mediaType=${mediaType}`}
      >
        {genresList[i].name}
      </Link>
    );
  }

  return <div className="section-dropdown">{dropDownLinks}</div>;
}

/** returns the link to fetch data from
 *  based on some data
 */
export function GetFetchLink(props) {
  const { mediaType, categoryList, page, genresList } = props;
  let newLink = undefined;

  if (categoryList === "trending") {
    return `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${api_key}&page=${page}`;
  }
  genresList.forEach((genre) => {
    if (categoryList == genre.name) {
      console.log("mamamamamama");
      newLink = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre.id}&with_watch_monetization_types=flatrate`;
    }
  });
  console.log(newLink);
  if (newLink != undefined) {
    return newLink;
  }
  return `https://api.themoviedb.org/3/${mediaType}/${categoryList}?api_key=${api_key}&language=en-US&page=${page}`;
}
