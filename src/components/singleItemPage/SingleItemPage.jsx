import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemInfo from "./ItemInfo";
import RatingStars from "./RatingStars";
import Genres from "./Genres";
import Casts from "./Casts";
import ItemWebsites from "./ItemWebsites";
import LoadingCircle from "../loading/LoadingCircle";
import arrowLeft from "@/assets/arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SingleItemPage(props) {
  const { mediaType, mediaId } = props;
  const isMovie = mediaType == "movie";
  const mediaTypeForUrl = mediaType == "movie" ? "movie" : "tv";
  const [itemInfo, setItemInfo] = useState([]);
  const router = useRouter();
  const coverImgRef = useRef();

  useEffect(() => {
    axios
      .post("/api/singleMediaInfo", { mediaTypeForUrl, mediaId })
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
    router.back();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (itemInfo.length < 1) return <LoadingCircle />;
  return (
    <div className="single-page-container">
      {/* back button */}
      <div className="back-btn-container">
        <button onClick={backPage}>
          <Image src={arrowLeft} alt="arrow left" /> Back
        </button>
      </div>

      {/* poster */}
      <img
        ref={coverImgRef}
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
