import TrendingSlide from "./TrendingSlide";
import { useContext } from "react";
import { DataContext } from "../../App";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Trending() {
  return (
    <div className="trending-container">
      <header className="section-header">
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
        className="mySwiper"
      >
        {Slides()}
      </Swiper>
    </div>
  );
}

function Slides() {
  const dataResults = useContext(DataContext);

  const allSlides = dataResults.slice(0, 15).map((movie, index) => {
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
