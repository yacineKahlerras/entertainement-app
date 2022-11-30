import React from "react";
import { data } from "../data";
import HomeSection from "./home/HomeSection";
import Trending from "./home/Trending";

export default function Home() {
  return (
    <div className="home">
      <Trending />
      <HomeSection
        headerTitle="Popular"
        category="movies"
        list={data.results.slice(0, 8)}
      />
    </div>
  );
}
