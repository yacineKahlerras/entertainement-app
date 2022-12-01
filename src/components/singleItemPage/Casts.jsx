import React, { useEffect, useState } from "react";

export default function Casts(props) {
  const [castList, setCastList] = useState([]);
  const { id } = props;

  useEffect(() => {}, []);

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
