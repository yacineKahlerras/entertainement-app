import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingSlide from "./TrendingSlide";
import { SwiperSlide } from "swiper/react";
import LoadingCircle from "../loading/LoadingCircle";

export default function TrendingSlides(mediaType = "all") {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.post(`/api/trending`, { mediaType: mediaType }).then((res) => {
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

  return list.length ? allSlides : <LoadingCircle />;
}
