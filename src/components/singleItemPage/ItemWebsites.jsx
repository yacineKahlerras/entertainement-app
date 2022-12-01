import React from "react";
import websiteIcon from "../../assets/link-icon.svg";
import imdbIcon from "../../assets/imdb-icon.svg";

export default function ItemWebsites(props) {
  const { homepage, imdb_id, title } = props;

  return (
    <div className="item-links-container">
      <a href={homepage} className="home-page-link" target={"_blank"}>
        Website <img src={websiteIcon} alt={`${title} homepage`} />
      </a>

      {imdb_id ? (
        <a
          href={`https://www.imdb.com/title/${imdb_id}/`}
          className="home-page-link"
          target={"_blank"}
        >
          IMDB <img src={imdbIcon} alt={`${title} homepage`} />
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
