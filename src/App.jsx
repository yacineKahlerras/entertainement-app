import "./styles/style.scss";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

const api_key = "982f680fcfc113f532f791142a6598c1";
export const DataContext = createContext(["haha"]);

export default function App() {
  return (
    <main>
      <Nav />
      <SearchBar />
      <Outlet />
    </main>
  );
}
