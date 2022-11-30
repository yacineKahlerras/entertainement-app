import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingSlide from "./TrendingSlide";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Trending() {
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
        {Slides()}
      </Swiper>
    </div>
  );
}

function Slides() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=982f680fcfc113f532f791142a6598c1`
      )
      .then((res) => {
        const persons = res.data;
        setList(persons.results.slice(0, 11));
      });
  }, []);

  const allSlides = list.slice(0, 11).map((movie, index) => {
    return (
      <SwiperSlide key={index}>
        <TrendingSlide
          src={movie.backdrop_path}
          year={movie.release_date}
          video={movie.video}
          title={movie.title}
        />
      </SwiperSlide>
    );
  });

  return allSlides;
}
