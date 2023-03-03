import React from "react";
import { createHashRouter } from "react-router-dom";
import App from "./App";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ErrorPage from "./components/error-page";
import Home from "./components/Home";
import MoviesPage from "./components/movies/MoviesPage";
import SingleItemPage from "./components/singleItemPage/SingleItemPage";
import TvShows from "./components/tvShow/TvShows";
import { SearchLoader } from "./components/SearchPage/SearchMethods";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: SearchLoader,
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

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
