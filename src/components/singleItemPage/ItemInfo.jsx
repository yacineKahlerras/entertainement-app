import React from "react";

export default function ItemInfo(props) {
  const {
    isMovie,
    runtime,
    number_of_episodes,
    spoken_languages,
    status,
    release_date,
    first_air_date,
  } = props;

  const tempElementsData = [
    {
      title: "Length",
      value: isMovie ? `${runtime}mins` : `${number_of_episodes} apisodes`,
    },
    { title: "Language", value: spoken_languages[0].name },
    {
      title: "Year",
      value: isMovie
        ? String(release_date).slice(0, 4)
        : String(first_air_date).slice(0, 4),
    },
    { title: "Status", value: status },
  ];

  const infoElements = tempElementsData.map((info, index) => {
    return (
      <div key={index} className="item-info-container">
        <span className="item-info-title">{info.title}</span>
        <span className="item-info-value">{info.value}</span>
      </div>
    );
  });

  return <div className="item-info">{infoElements}</div>;
}
