import React from "react";

export default function HomeSection(props) {
  const { headerTitle, category } = props;
  return (
    <div className="home-section">
      <header className="section-header">
        <h1>{headerTitle}</h1>
        <span className="header-category">{category}</span>
        <button>see more</button>
      </header>
    </div>
  );
}
