import React from "react";
import HomeSection from "./home/HomeSection";
import Trending from "./home/Trending";

export default function Home() {
  const sectionSizeLimit = 9;

  const sectionData = [
    {
      title: "Popular",
      category: "movies",
      linkKeyword: "popular",
    },
    {
      title: "Now Playing",
      category: "movies",
      linkKeyword: "now_playing",
    },
    {
      title: "Upcoming",
      category: "movies",
      linkKeyword: "upcoming",
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
      <Trending />
      {sectionElements}
    </div>
  );
}
