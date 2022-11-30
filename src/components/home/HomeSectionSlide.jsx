import React from "react";
import movieLogo from "../../assets/icon-category-movie.svg";

export default function HomeSectionSlide(props) {
  const {
    item: {
      title,
      original_name,
      release_date,
      first_air_date,
      video,
      backdrop_path,
    },
  } = props;

  const slideTitle = video === false ? title : original_name;
  const year = video === false ? release_date : first_air_date;
  const genre = video === false ? "movie" : "TV series";
  const showSlide = backdrop_path !== null;

  return (
    <div
      className="home-section-slide"
      style={{ display: showSlide ? "block" : "none" }}
    >
      <img
        className="slide-cover"
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
      ></img>
      <div className="home-section-slide-text">
        <span className="info">
          {String(year).substring(0, 4)}{" "}
          <img src={movieLogo} alt="movie logo"></img> {genre}
        </span>
        <span className="title">{slideTitle}</span>
      </div>
    </div>
  );
}
