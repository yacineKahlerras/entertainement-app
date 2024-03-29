import Image from "next/image";
import React from "react";
import starEmpty from "../../assets/star-empty.svg";
import starFull from "../../assets/star-full.svg";
import starHalfFull from "../../assets/star-half-full.svg";

export default function RatingStars(props) {
  const { rating } = props;
  const fullStarsCount = Math.floor(rating);
  const emptyStarsCount =
    Math.floor(5 - rating) > 0 ? Math.floor(5 - rating) : 0;
  const halfStar = rating % 1;

  let fullStarsElements = [];
  let emptyStarsElements = [];

  for (let i = 0; i < fullStarsCount; i++) {
    fullStarsElements.push(
      <Image key={i} src={starFull} alt="full star icon" className="star" />
    );
  }

  for (let i = 0; i < emptyStarsCount; i++) {
    emptyStarsElements.push(
      <Image key={i} src={starEmpty} alt="full star icon" className="star" />
    );
  }

  const halfStarElement = halfStar ? (
    <Image src={starHalfFull} alt="half full star icon" className="star" />
  ) : (
    ""
  );

  return (
    <div className="rating-container">
      <h2 className="rating">{rating}</h2>
      <div className="stars-container">
        {fullStarsElements}
        {halfStarElement}
        {emptyStarsElements}
      </div>
    </div>
  );
}
