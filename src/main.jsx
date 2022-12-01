import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ErrorPage from "./components/error-page";
import Home from "./components/Home";
import MoviesPage from "./components/movies/MoviesPage";
import SingleItemPage from "./components/singleItemPage/SingleItemPage";
import TvShows from "./components/tvShow/TvShows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "tv-shows",
        element: <TvShows />,
      },
      {
        path: "movie/:movieId",
        element: <SingleItemPage />,
      },
      {
        path: "tv-show/:tvId",
        element: <SingleItemPage />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
