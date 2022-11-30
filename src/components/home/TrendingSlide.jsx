import React from "react";
import movieLogo from "../../assets/icon-category-movie.svg";
import tvLogo from "../../assets/icon-category-tv.svg";

export default function TrendingSlide(props) {
  const { src, year, video, title } = props;
  const genre = video === false ? "movie" : "TV series";
  const imgSrc = video === false ? movieLogo : tvLogo;

  return (
    <div className="trending-slide">
      <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={title}></img>
      <div className="slide-text">
        <span className="info">
          {String(year).substring(0, 4)}{" "}
          <img src={imgSrc} alt="movie logo"></img> {genre}
        </span>
        <span className="title">{title}</span>
      </div>
    </div>
  );
}
