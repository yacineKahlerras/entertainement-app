import { Skeleton } from "@mui/material";
import React, { useRef } from "react";
import Link from "next/link";
import movieLogo from "../../assets/icon-category-movie.svg";
import Image from "next/image";

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
    },
  } = props;

  // slide information based on wether its a movie or tv-show
  const slideTitle = video === false ? title : original_name;
  const year = video === false ? release_date : first_air_date;
  const genre = video === false ? "Movie" : "TV series";

  const imgSkeleton = (
    <Skeleton
      width="100%"
      height="100%"
      sx={{ transform: "scale(1)", minHeight: "14rem" }}
      animation="wave"
    />
  );

  const imgCoverElement = (
    <Image
      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
      className="slide-cover"
      alt={`cover for ${title}`}
      width={500}
      height={140}
      loading="lazy"
    />
  );

  return (
    <Link
      className="home-section-slide-link"
      href={`/${video === false ? "movie" : "tv-show"}/${id}`}
    >
      <div className="home-section-slide">
        {/* slide cover image */}
        <div ref={coverImg} className="slide-cover-container">
          {backdrop_path ? imgCoverElement : imgSkeleton}
        </div>

        {/* slide text info */}
        <div className="home-section-slide-text">
          <span className="info">
            {String(year).substring(0, 4)}
            <Image src={movieLogo} alt="movie logo" /> {genre}
          </span>
          <span className="title">{slideTitle}</span>
        </div>
      </div>
    </Link>
  );
}
