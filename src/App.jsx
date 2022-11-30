import "./styles/style.scss";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import { Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const api_key = "982f680fcfc113f532f791142a6598c1";
export const DataContext = createContext(["haha"]);

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`)
      .then((res) => {
        const persons = res.data;
        setData(persons.results);
      });
  }, []);

  return (
    <main>
      <Nav />
      <SearchBar />
      <DataContext.Provider value={data}>
        <Outlet />
      </DataContext.Provider>
    </main>
  );
}
