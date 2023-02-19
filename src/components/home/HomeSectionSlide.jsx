import { Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import movieLogo from "../../assets/icon-category-movie.svg";

export default function HomeSectionSlide(props) {
  const coverImg = useRef();
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

  // slide information based on wether its a movie or tv-show
  const slideTitle = video === false ? title : original_name;
  const year = video === false ? release_date : first_air_date;
  const genre = video === false ? "Movie" : "TV series";

  return (
    <Link
      className="home-section-slide-link"
      to={`/${video === false ? "movie" : "tv-show"}/${id}`}
    >
      <div className="home-section-slide">
        {/* slide cover image */}
        <div ref={coverImg} className="slide-cover-container">
          {backdrop_path ? (
            <LazyLoadImage
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              className="slide-cover"
              alt={title}
            />
          ) : (
            <Skeleton
              width="100%"
              height="100%"
              sx={{ transform: "scale(1)" }}
              animation="wave"
            />
          )}
        </div>

        {/* slide text info */}
        <div className="home-section-slide-text">
          <span className="info">
            {String(year).substring(0, 4)}
            <img src={movieLogo} alt="movie logo"></img> {genre}
          </span>
          <span className="title">{slideTitle}</span>
        </div>
      </div>
    </Link>
  );
}
