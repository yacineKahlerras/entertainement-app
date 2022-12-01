import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

export default function SingleItemPage(props) {
  const [itemInfo, setItemInfo] = useState([]);
  const paramsId = useParams();
  const isMovie = paramsId.movieId ? true : false;
  const mediaType = isMovie ? "movie" : "tv";
  const id = isMovie ? paramsId.movieId : paramsId.tvId;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=982f680fcfc113f532f791142a6598c1&language=en-US`
      )
      .then((res) => {
        const persons = res.data;
        setItemInfo();
      });
  }, []);

  return <h1>hahaaaaaaaaaaa</h1>;
}
