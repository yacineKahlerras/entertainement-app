import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ItemInfo from "./ItemInfo";
import RatingStars from "./RatingStars";

export default function SingleItemPage(props) {
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=982f680fcfc113f532f791142a6598c1&language=en-US`
      )
      .then((res) => {
        const persons = res.data;
        setItemInfo(persons);
      });
  }, []);

  const {
    poster_path,
    tagline,
    genres,
    vote_average,
    spoken_languages,
    runtime,
    release_date,
    first_air_date,
    status,
    title,
    number_of_episodes,
  } = itemInfo;

  const paramsId = useParams();
  const isMovie = paramsId.movieId ? true : false;
  const mediaType = isMovie ? "movie" : "tv";
  const id = isMovie ? paramsId.movieId : paramsId.tvId;

  const rating = (vote_average / 2).toFixed(1);
  const itemInfoProps = {
    isMovie: { isMovie },
    runtime: { runtime },
    number_of_episodes: { number_of_episodes },
    spoken_languages: { spoken_languages },
    status: { status },
    release_date: { release_date },
    first_air_date: { first_air_date },
  };

  if (itemInfo.length < 1) return;
  return (
    <div className="single-page-container">
      <img
        className="item-poster"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div className="text-side">
        <h1 className="title">{title}</h1>
        <span className="tagline">{tagline}</span>
        <div className="rating-container">
          <h2 className="rating">{rating}</h2>
          <RatingStars rating={rating} />
        </div>
        <ItemInfo {...itemInfoProps} />
      </div>
    </div>
  );
}
