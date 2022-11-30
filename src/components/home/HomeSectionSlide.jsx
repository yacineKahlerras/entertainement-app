import React from "react";
import movieLogo from "../../assets/icon-category-movie.svg";

export default function HomeSectionSlide(props) {
  const { src, title, genre, year } = props;
  return (
    <div className="home-section-slide">
      <img
        className="slide-cover"
        src={`https://image.tmdb.org/t/p/w500${src}`}
        alt={title}
      ></img>
      <div className="home-section-slide-text">
        <span className="info">
          {String(year).substring(0, 4)}{" "}
          <img src={movieLogo} alt="movie logo"></img> {genre}
        </span>
        <span className="title">{title}</span>
      </div>
    </div>
  );
}
