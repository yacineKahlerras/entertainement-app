import "./styles/style.scss";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import { Outlet, useLoaderData } from "react-router-dom";
import { createContext } from "react";
import SearchPage from "./components/SearchPage/SearchPage";

export const api_key = "982f680fcfc113f532f791142a6598c1";
export const DataContext = createContext(["haha"]);

export default function App() {
  const { query } = useLoaderData();

  return (
    <main>
      <Nav />
      <SearchBar query={query} />
      <Outlet />
      {/* <SearchPage /> */}
    </main>
  );
}
