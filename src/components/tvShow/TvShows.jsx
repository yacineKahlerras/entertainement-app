import React from "react";
import HomeSection from "../home/HomeSection";
import Trending from "../home/Trending";

export default function TvShows() {
  const sectionSizeLimit = 9;

  const sectionData = [
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
      <Trending mediaType="tv" />
      {sectionElements}
    </div>
  );
}
