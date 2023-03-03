import React from "react";
import websiteIcon from "../../assets/link-icon.svg";
import imdbIcon from "../../assets/imdb-icon.svg";
import Image from "next/image";

export default function ItemWebsites(props) {
  const { homepage, imdb_id, title } = props;

  return (
    <div className="item-links-container">
      <a href={homepage} className="home-page-link" target={"_blank"}>
        Website{" "}
        <Image
          src={websiteIcon}
          alt={`${title} homepage`}
          width="auto"
          height="auto"
        />
      </a>

      {imdb_id ? (
        <a
          href={`https://www.imdb.com/title/${imdb_id}/`}
          className="imdb-link"
          target={"_blank"}
        >
          IMDB{" "}
          <Image
            src={imdbIcon}
            alt={`${title} homepage`}
            width="auto"
            height={30}
          />
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
