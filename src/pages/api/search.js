import { api_key } from "@/App";
import axios from "axios";

export default function handler(req, res) {
  const { page, query } = req.body;

  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`
    )
    .then((result) => {
      res.status(200).json(result);
    });
}
