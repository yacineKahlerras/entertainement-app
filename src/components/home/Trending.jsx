import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingSlide from "./TrendingSlide";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Trending(props) {
  return (
    <div className="trending-container">
      <header className="section-header">
        <h1>Trending</h1>
        <button>see more</button>
      </header>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Slides(props.mediaType ? props.mediaType : undefined)}
      </Swiper>
    </div>
  );
}

function Slides(mediaType = "all") {
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
        />
      </SwiperSlide>
    );
  });

  return allSlides;
}
