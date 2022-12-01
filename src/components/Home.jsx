import React from "react";
import HomeSection from "./home/HomeSection";
import Trending from "./home/Trending";

export const sectionData = [
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
  {
    title: "Popular",
    mediaType: "tv",
    linkKeyword: "popular",
  },
  {
    title: "Airing Today",
    mediaType: "tv",
    linkKeyword: "airing_today",
  },
  {
    title: "On Air",
    mediaType: "tv",
    linkKeyword: "on_the_air",
  },
  {
    title: "Top Rated",
    mediaType: "tv",
    linkKeyword: "top_rated",
  },
];

export default function Home() {
  const sectionSizeLimit = 9;

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
      <Trending />
      {sectionElements}
    </div>
  );
}
