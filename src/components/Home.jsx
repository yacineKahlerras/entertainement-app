import React, { useContext } from "react";
import { DataContext } from "../App";
import HomeSection from "./home/HomeSection";
import Trending from "./home/Trending";
import { PopularList } from "./home/HomeSectionMethods";

export default function Home() {
  const dataResults = useContext(DataContext);

  return (
    <div className="home">
      <Trending />
      <HomeSection
        headerTitle="Popular"
        category="movies"
        list={PopularList(dataResults)}
      />
    </div>
  );
}
