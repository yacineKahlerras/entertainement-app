import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingSlide from "./TrendingSlide";
import Slides from "./TrendingSlideGroup";

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
