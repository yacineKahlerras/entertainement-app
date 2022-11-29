import React from "react";
import movieLogo from "../../assets/icon-category-movie.svg";

export default function TrendingSlide({ src, year, genre, title }) {
  return (
    <div className="trending-slide">
      <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={title}></img>
      <div className="slide-text">
        <span className="info">
          {String(year).substring(0, 4)}{" "}
          <img src={movieLogo} alt="movie logo"></img> {genre}
        </span>
        <span className="title">{title}</span>
      </div>
    </div>
  );
}
