import React from "react";
import HomeSection from "../home/HomeSection";
import Trending from "../home/Trending";

export default function MoviesPage() {
  const sectionSizeLimit = 9;

  const sectionData = [
    {
      title: "Popular",
      mediaType: "movie",
      linkKeyword: "popular",
    },
    {
      title: "Now Playing",
      mediaType: "movie",
      linkKeyword: "now_playing",
    },
    {
      title: "Upcoming",
      mediaType: "movie",
      linkKeyword: "upcoming",
    },
    {
      title: "Top Rated",
      mediaType: "movie",
      linkKeyword: "top_rated",
    },
  ];

  const sectionElements = sectionData.map((sec, index) => {
    return (
      <HomeSection
        key={index}
        headerTitle={sec.title}
        mediaType={sec.mediaType}
        linkKeyword={sec.linkKeyword}
        sectionSizeLimit={sectionSizeLimit}
      />
    );
  });

  return (
    <div className="home">
      <Trending mediaType="movie" />
      {sectionElements}
    </div>
  );
}
