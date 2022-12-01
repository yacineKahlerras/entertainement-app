import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import starEmpty from "../../assets/star-empty.svg";
import starFull from "../../assets/star-full.svg";
import starHalfFull from "../../assets/star-half-full.svg";

export default function SingleItemPage(props) {
  const [itemInfo, setItemInfo] = useState([]);

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

  console.log("yaya", spoken_languages);

  const paramsId = useParams();
  const isMovie = paramsId.movieId ? true : false;
  const mediaType = isMovie ? "movie" : "tv";
  const id = isMovie ? paramsId.movieId : paramsId.tvId;

  const rating = (vote_average / 2).toFixed(1);

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
        <ItemInfo
          isMovie={isMovie}
          runtime={runtime}
          number_of_episodes={number_of_episodes}
          spoken_languages={spoken_languages}
          status={status}
          release_date={release_date}
          first_air_date={first_air_date}
        />
      </div>
    </div>
  );
}

function RatingStars(props) {
  const { rating } = props;
  const fullStarsCount = Math.floor(rating);
  const emptyStarsCount =
    Math.floor(5 - rating) > 0 ? Math.floor(5 - rating) : 0;
  const halfStar = rating % 1;

  let fullStarsElements = [];
  let emptyStarsElements = [];

  for (let i = 0; i < fullStarsCount; i++) {
    fullStarsElements.push(
      <img key={i} src={starFull} alt="full star icon" className="star" />
    );
  }

  for (let i = 0; i < emptyStarsCount; i++) {
    emptyStarsElements.push(
      <img key={i} src={starEmpty} alt="full star icon" className="star" />
    );
  }

  const halfStarElement = halfStar ? (
    <img src={starHalfFull} alt="half full star icon" className="star" />
  ) : (
    ""
  );

  return (
    <div className="stars-container">
      {fullStarsElements}
      {halfStarElement}
      {emptyStarsElements}
    </div>
  );
}

function ItemInfo(props) {
  const {
    isMovie,
    runtime,
    number_of_episodes,
    spoken_languages,
    status,
    release_date,
    first_air_date,
  } = props;

  const tempElementsData = [
    {
      title: "Length",
      value: isMovie ? `${runtime}mins` : `${number_of_episodes} apisodes`,
    },
    { title: "Language", value: spoken_languages[0].name },
    {
      title: "Year",
      value: isMovie
        ? String(release_date).slice(0, 4)
        : String(first_air_date).slice(0, 4),
    },
    { title: "Status", value: status },
  ];

  const infoElements = tempElementsData.map((info, index) => {
    return (
      <div key={index} className="item-info-container">
        <span className="item-info-title">{info.title}</span>
        <span className="item-info-value">{info.value}</span>
      </div>
    );
  });

  return <div className="item-info">{infoElements}</div>;
}
