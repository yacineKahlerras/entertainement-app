import React from "react";
import logo from "../assets/logo.svg";
import homeLogo from "../assets/icon-nav-home.svg";
import moviesLogo from "../assets/icon-nav-movies.svg";
import tvLogo from "../assets/icon-nav-tv-series.svg";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const location = "/"; //useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image
              className={location.pathname == "/" ? "selected-page" : ""}
              src={homeLogo}
              alt="home button"
            />
          </Link>
        </li>
        <li>
          <Link href={"/movies"}>
            <Image
              className={location.pathname == "/movies" ? "selected-page" : ""}
              src={moviesLogo}
              alt="movies button"
            />
          </Link>
        </li>
        <li>
          <Link href={"/tv-shows"}>
            <Image
              className={
                location.pathname == "/tv-shows" ? "selected-page" : ""
              }
              src={tvLogo}
              alt="tv button"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
