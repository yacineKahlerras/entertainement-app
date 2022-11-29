import React from "react";
import logo from "../assets/logo.svg";
import homeLogo from "../assets/icon-nav-home.svg";
import moviesLogo from "../assets/icon-nav-movies.svg";
import tvLogo from "../assets/icon-nav-tv-series.svg";
import { Link } from "react-router-dom";

export default function Nav() {
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
            <img src={homeLogo} alt="home button"></img>
          </Link>
        </li>
        <li>
          <Link to={"/movies"}>
            <img src={moviesLogo} alt="movies button"></img>
          </Link>
        </li>
        <li>
          <Link to={"/tv-shows"}>
            <img src={tvLogo} alt="tv button"></img>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
