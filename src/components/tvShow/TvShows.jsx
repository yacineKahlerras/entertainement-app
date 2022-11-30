import React from "react";
import HomeSection from "../home/HomeSection";
import Trending from "../home/Trending";

export default function TvShows() {
  const sectionSizeLimit = 9;

  const sectionData = [
    {
      title: "Popular",
      category: "tv",
      linkKeyword: "popular",
    },
    {
      title: "Airing Today",
      category: "tv",
      linkKeyword: "airing_today",
    },
    {
      title: "On Air",
      category: "tv",
      linkKeyword: "on_the_air",
    },
    {
      title: "Top Rated",
      category: "tv",
      linkKeyword: "top_rated",
    },
  ];

  const sectionElements = sectionData.map((sec, index) => {
    return (
      <HomeSection
        key={index}
        headerTitle={sec.title}
        category={sec.category}
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
