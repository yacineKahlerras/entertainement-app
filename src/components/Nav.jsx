import React from "react";
import logo from "../assets/logo.svg";
import homeLogo from "../assets/icon-nav-home.svg";
import moviesLogo from "../assets/icon-nav-movies.svg";
import tvLogo from "../assets/icon-nav-tv-series.svg";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>
            <img src={logo} alt="logo"></img>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <img
              className={location.pathname == "/" ? "selected-page" : ""}
              src={homeLogo}
              alt="home button"
            ></img>
          </Link>
        </li>
        <li>
          <Link to={"/movies"}>
            <img
              className={location.pathname == "/movies" ? "selected-page" : ""}
              src={moviesLogo}
              alt="movies button"
            ></img>
          </Link>
        </li>
        <li>
          <Link to={"/tv-shows"}>
            <img
              className={
                location.pathname == "/tv-shows" ? "selected-page" : ""
              }
              src={tvLogo}
              alt="tv button"
            ></img>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
