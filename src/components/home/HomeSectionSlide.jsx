import React from "react";
import { Link } from "react-router-dom";
import movieLogo from "../../assets/icon-category-movie.svg";

export default function HomeSectionSlide(props) {
  const {
    item: {
      id,
      title,
      original_name,
      release_date,
      first_air_date,
      video,
      backdrop_path,
      poster_path,
    },
  } = props;

  const slideTitle = video === false ? title : original_name;
  const year = video === false ? release_date : first_air_date;
  const genre = video === false ? "movie" : "TV series";
  const showSlide = backdrop_path !== null;
  const imgSrc = backdrop_path !== null ? backdrop_path : poster_path;

  return (
    <Link to={`/${video === false ? "movie" : "tv-show"}/${id}`}>
      <div className="home-section-slide">
        <div className="slide-cover-container">
          <img
            className="slide-cover"
            src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
            alt={title}
          ></img>
        </div>
        <div className="home-section-slide-text">
          <span className="info">
            {String(year).substring(0, 4)}{" "}
            <img src={movieLogo} alt="movie logo"></img> {genre}
          </span>
          <span className="title">{slideTitle}</span>
        </div>
      </div>
    </Link>
  );
}
