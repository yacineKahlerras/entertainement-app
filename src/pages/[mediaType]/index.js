import MoviesPage from "@/components/movies/MoviesPage";
import TvShows from "@/components/tvShow/TvShows";
import React from "react";

export default function MediaPage(props) {
  const { mediaType } = props;

  if (mediaType == "movies") {
    return <MoviesPage />;
  } else if (mediaType == "tv-shows") {
    return <TvShows />;
  } else {
    return <></>;
  }
}

export async function getServerSideProps(context) {
  const { mediaType } = context.params;

  return {
    props: {
      mediaType: mediaType,
    },
  };
}
