import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Nav from "../Nav";
import SearchBar from "../SearchBar";
import SearchPage from "../SearchPage/SearchPage";

export default function MainLayout({ children }) {
  const router = useRouter();
  const { query } = router.query;

  return (
    <main>
      <Head>
        <title>Travel Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Nav />
      <SearchBar />
      {query && query != "" ? <SearchPage /> : children}
    </main>
  );
}
