import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemInfo from "./ItemInfo";
import RatingStars from "./RatingStars";
import Genres from "./Genres";
import Casts from "./Casts";
import ItemWebsites from "./ItemWebsites";
import LoadingCircle from "../loading/LoadingCircle";
import arrowLeft from "@/assets/arrow-left.svg";

export default function SingleItemPage(props) {
  const { mediaType, mediaId } = props;
  const isMovie = mediaType == "movie";
  const mediaTypeForUrl = mediaType == "movie" ? "movie" : "tv";
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaTypeForUrl}/${mediaId}?api_key=982f680fcfc113f532f791142a6598c1&language=en-US`
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
    original_name,
    number_of_episodes,
    overview,
    homepage,
    imdb_id,
  } = itemInfo;

  const rating = (vote_average / 2).toFixed(1);
  const itemInfoProps = {
    isMovie: isMovie,
    runtime: runtime,
    number_of_episodes: number_of_episodes,
    spoken_languages: spoken_languages,
    status: status,
    release_date: release_date,
    first_air_date: first_air_date,
  };
  const itemWebsitesProps = {
    homepage: homepage,
    imdb_id: imdb_id,
    title: title,
  };

  function backPage() {
    navigate(-1);
  }

  // window.scrollTo(0, 0);

  if (itemInfo.length < 1) return <LoadingCircle />;
  return (
    <div className="single-page-container">
      {/* back button */}
      <div className="back-btn-container">
        <button onClick={backPage}>
          <img src={arrowLeft} alt="arrow left" /> Back
        </button>
      </div>

      {/* poster */}
      <img
        className="item-poster"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />

      {/* movie text info */}
      <div className="text-side">
        <h1 className="title">{isMovie ? title : original_name}</h1>
        <span className="tagline">{tagline}</span>
        <RatingStars rating={rating} />
        <ItemInfo {...itemInfoProps} />
        <Genres genres={genres} />
        <div className="synopsis-container">
          <h3>Synopsis</h3>
          <p>{overview}</p>
        </div>
        <Casts id={mediaId} mediaType={isMovie ? "movie" : "tv"} />
        <ItemWebsites {...itemWebsitesProps} />
      </div>
    </div>
  );
}
