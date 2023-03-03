import Image from "next/image";
import React from "react";
import leftArrowIcon from "../../assets/arrow-left-short.svg";
import rightArrowIcon from "../../assets/arrow-right-short.svg";

export default function PageNavigations(props) {
  const { changePage, page, pagesCount } = props;

  return (
    <div className="page-buttons-container">
      <button
        onClick={() => {
          changePage(-1);
        }}
        className="page-button prev-page-button"
      >
        <Image
          src={leftArrowIcon}
          alt="left arrow icon"
          width={20}
          height={20}
        />{" "}
        Prev
      </button>
      <span className="pages-count">
        Page {page} of {pagesCount}
      </span>
      <button
        onClick={() => {
          changePage();
        }}
        className="page-button next-page-button"
      >
        Next{" "}
        <Image
          src={rightArrowIcon}
          alt="left arrow icon"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
