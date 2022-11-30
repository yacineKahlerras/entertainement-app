import React, { useContext } from "react";
import { DataContext } from "../App";
import HomeSection from "./home/HomeSection";
import Trending from "./home/Trending";
import { PopularList, NowPlayingTheatersList } from "./home/HomeSectionMethods";

export default function Home() {
  const dataResults = useContext(DataContext);
  const sectionSizeLimit = 9;

  const sectionData = [
    {
      title: "Popular",
      category: "movies",
      list: PopularList(dataResults, sectionSizeLimit),
    },
    {
      title: "Now Playing",
      category: "movies",
      list: NowPlayingTheatersList(dataResults, sectionSizeLimit),
    },
  ];

  const sectionElements = sectionData.map((sec, index) => {
    return (
      <HomeSection
        key={index}
        headerTitle={sec.title}
        category={sec.category}
        list={sec.list}
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
