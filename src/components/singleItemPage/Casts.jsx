import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Casts(props) {
  const [castList, setCastList] = useState([]);
  const { id, mediaType } = props;
  const castNumberLimit = 20;

  useEffect(() => {
    axios.post("/api/credits", { mediaType, id }).then((res) => {
      const fetchedCastList = res.data.cast;
      const castNames = [];
      for (let i = 0; i < fetchedCastList.length; i++) {
        if (castNames.length >= castNumberLimit) break;
        castNames.push(fetchedCastList[i].name);
      }
      setCastList(castNames);
    });
  }, []);

  const castElements = castList.map((element, index) => {
    return (
      <span key={index} className="cast-element">
        {element}
      </span>
    );
  });

  return (
    <div className="casts-container">
      <h3>Casts</h3>
      <div className="cast-elements-container">{castElements}</div>
    </div>
  );
}
