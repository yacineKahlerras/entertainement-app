import React from "react";
import TrendingSlides from "./TrendingSlides";

import { Swiper } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function Trending(props) {
  return (
    <div className="trending-container">
      <header className="section-header">
        <h1>Trending</h1>
        <Link
          to={`/category/?categoryName=trending&mediaType=${
            props.mediaType ? props.mediaType : "all"
          }`}
        >
          <button>see more</button>
        </Link>
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
        {TrendingSlides(props.mediaType ? props.mediaType : undefined)}
      </Swiper>
    </div>
  );
}
