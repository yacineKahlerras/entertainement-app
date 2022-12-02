import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingSlide from "./TrendingSlide";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Slides(mediaType = "all") {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=982f680fcfc113f532f791142a6598c1`
      )
      .then((res) => {
        const persons = res.data;
        setList(persons.results.slice(0, 11));
      });
  }, []);

  const allSlides = list.slice(0, 11).map((element, index) => {
    return (
      <SwiperSlide key={index}>
        <TrendingSlide
          src={element.backdrop_path}
          year={
            element.video === false
              ? element.release_date
              : element.first_air_date
          }
          video={element.video}
          title={
            element.video === false ? element.title : element.original_name
          }
          id={element.id}
        />
      </SwiperSlide>
    );
  });

  return allSlides;
}
