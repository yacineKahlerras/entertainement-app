import React from "react";

export default function CategorySelector() {
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
          Category <i className="uil uil-arrow-down"></i>
        </label>
        <div className="section-dropdown">
          <a href="#">
            Dropdown Link <i className="uil uil-arrow-right"></i>
          </a>
          <input
            className="dropdown-sub"
            type="checkbox"
            id="dropdown-sub"
            name="dropdown-sub"
          />
          <label className="for-dropdown-sub" htmlFor="dropdown-sub">
            Dropdown Sub <i className="uil uil-plus"></i>
          </label>
          <div className="section-dropdown-sub">
            <a href="#">
              Dropdown Link <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#">
              Dropdown Link <i className="uil uil-arrow-right"></i>
            </a>
          </div>
          <a href="#">
            Dropdown Link <i className="uil uil-arrow-right"></i>
          </a>
          <a href="#">
            Dropdown Link <i className="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
