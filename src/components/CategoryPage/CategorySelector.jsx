import React, { useRef } from "react";
import { DropDownElements } from "./CategoryPageMethods";

export default function CategorySelector(props) {
  const { mediaType, genresList } = props;
  const categoryCancelRef = useRef();
  const checkBoxRef = useRef();

  function checkBoxHandle() {
    categoryCancelRef.current.classList.toggle("active");
  }

  function cancelCategorySelection() {
    categoryCancelRef.current.classList.remove("active");
    checkBoxRef.current.checked = false;
  }

  return (
    <div className="category-dropdown-container">
      <div className="sec-center">
        <input
          className="dropdown"
          type="checkbox"
          id="dropdown"
          name="dropdown"
          onChange={checkBoxHandle}
          ref={checkBoxRef}
        />
        <label className="for-dropdown" htmlFor="dropdown">
          Category
        </label>
        <DropDownElements
          mediaType={mediaType}
          genresList={genresList}
          clickHandle={cancelCategorySelection}
        />
      </div>
      <div
        onClick={cancelCategorySelection}
        ref={categoryCancelRef}
        className="category-bg-cancel"
      ></div>
    </div>
  );
}
