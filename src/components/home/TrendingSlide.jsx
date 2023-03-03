import Image from "next/image";
import Link from "next/link";
import React from "react";
import movieLogo from "../../assets/icon-category-movie.svg";
import tvLogo from "../../assets/icon-category-tv.svg";

export default function TrendingSlide(props) {
  const { src, year, video, title, id } = props;
  const isMovie = video === false;
  const genre = isMovie ? "movie" : "TV series";
  const imgSrc = isMovie ? movieLogo : tvLogo;

  return (
    <Link href={`/${isMovie ? "movie" : "tv-show"}/${id}`}>
      <div className="trending-slide">
        <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={title}></img>
        <div className="slide-text">
          <span className="info">
            {String(year).substring(0, 4)}
            <Image src={imgSrc} alt="movie logo" /> {genre}
          </span>
          <span className="title">{title}</span>
        </div>
      </div>
    </Link>
  );
}
