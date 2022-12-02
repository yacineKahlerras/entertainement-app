import React from "react";
import { DropDownElements } from "./CategoryPageMethods";

export default function CategorySelector(props) {
  const { mediaType } = props;

  return (
    <div className="category-dropdown-container">
      <div className="sec-center">
        <input
          className="dropdown"
          type="checkbox"
          id="dropdown"
          name="dropdown"
        />
        <label className="for-dropdown" htmlFor="dropdown">
          Category
        </label>
        <DropDownElements mediaType={mediaType} />
      </div>
    </div>
  );
}
