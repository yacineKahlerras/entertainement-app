import "./styles/style.scss";
import Nav from "./styles/components/Nav";
import SearchBar from "./styles/components/SearchBar";
import { Outlet } from "react-router-dom";

const api_key = "982f680fcfc113f532f791142a6598c1";

export default function App() {
  return (
    <>
      <Nav />
      <SearchBar />
      <Outlet />
    </>
  );
}
