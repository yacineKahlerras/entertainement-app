import { sectionData } from "../Home";
import { api_key } from "../../App";
import React from "react";
import { Link } from "react-router-dom";

/** gets the title of the section */
export function GetTitle(categoryList) {
  for (let i = 0; i < sectionData.length; i++) {
    if (categoryList === sectionData[i].linkKeyword)
      return sectionData[i].title;
  }
}

/** return the dropdown buttons with links to pages
 *  from that media type
 */
export function DropDownElements(props) {
  const { mediaType } = props;

  const dropDownLinks = sectionData.map((element, index) => {
    if (element.mediaType === mediaType)
      return (
        <Link
          key={index}
          to={`/category/?categoryList=${element.linkKeyword}&mediaType=${mediaType}`}
        >
          {element.title}
        </Link>
      );
  });

  return <div className="section-dropdown">{dropDownLinks}</div>;
}

/** returns the link to fetch data from
 *  based on some data
 */
export function GetFetchLink(props) {
  const { mediaType, categoryList, page } = props;

  if (categoryList === "trending") {
    return `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${api_key}&page=${page}`;
  }
  return `https://api.themoviedb.org/3/${mediaType}/${categoryList}?api_key=${api_key}&language=en-US&page=${page}`;
}
