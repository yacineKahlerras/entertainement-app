import { sectionData } from "../Home";
import { api_key } from "../../App";
import React from "react";
import Link from "next/link";

/** gets the title of the section */
export function GetTitle(categoryName, genresList) {
  if (categoryName === "trending") return "Trending";
  for (let i = 0; i < sectionData.length; i++) {
    if (categoryName === sectionData[i].linkKeyword)
      return sectionData[i].title;
  }
  for (let i = 0; i < genresList.length; i++) {
    if (categoryName == genresList[i].id) return genresList[i].name;
  }
}

/** return the dropdown buttons with links to pages
 *  from that media type
 */
export function DropDownElements(props) {
  const { mediaType, genresList, clickHandle } = props;

  const dropDownLinks = sectionData.map((element) => {
    if (element.mediaType === mediaType)
      return (
        <Link
          onClick={clickHandle}
          key={element.title}
          href={`/category/?categoryName=${element.linkKeyword}&mediaType=${mediaType}`}
        >
          {element.title}
        </Link>
      );
  });

  dropDownLinks.push(
    <Link
      onClick={clickHandle}
      key={"Trending"}
      href={`/category/?categoryName=trending&mediaType=${
        mediaType === "all" ? "all" : mediaType
      }`}
    >
      Trending
    </Link>
  );

  // genres dropdown
  for (let i = 0; i < genresList.length; i++) {
    dropDownLinks.push(
      <Link
        onClick={clickHandle}
        key={genresList[i].name}
        href={`/category/?categoryName=${genresList[i].id}&mediaType=${mediaType}&isGenres=true`}
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
  const { mediaType, categoryName, page, genresList, isGenres } = props;
  let newLink = undefined;

  if (isGenres) {
    genresList.forEach((genre) => {
      if (categoryName == genre.id) {
        newLink = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre.id}&with_watch_monetization_types=flatrate`;
      }
    });
    if (newLink != undefined) {
      return newLink;
    }
    return;
  }

  if (categoryName === "trending") {
    return `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${api_key}&page=${page}`;
  }
  return `https://api.themoviedb.org/3/${mediaType}/${categoryName}?api_key=${api_key}&language=en-US&page=${page}`;
}
