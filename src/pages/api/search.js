export default async function handler(req, res) {
  const { page, query } = req.body;
  const api_key = process.env.API_KEY;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  const data = await response.json();
  return res.status(200).json(data);
}
