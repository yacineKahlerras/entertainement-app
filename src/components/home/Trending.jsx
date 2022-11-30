import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { data } from "../../data";
import TrendingSlide from "./TrendingSlide";

export default function Trending() {
  return (
    <div className="trending-container">
      <header>
        <h1>Trending</h1>
        <span className="header-category">movies</span>
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
      >
        {Slides()}
      </Swiper>
    </div>
  );
}

function Slides() {
  const allSlides = data.results.slice(0, 15).map((movie, index) => {
    if (movie.video !== false) return;
    return (
      <SwiperSlide key={index}>
        <TrendingSlide
          src={movie.backdrop_path}
          year={movie.release_date}
          genre="movie"
          title={movie.title}
        />
      </SwiperSlide>
    );
  });

  return allSlides;
}
