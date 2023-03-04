export default async function handler(req, res) {
  const { genresMediaType } = req.body;
  const link = `https://api.themoviedb.org/3/genre/${genresMediaType}/list?api_key=${process.env.API_KEY}&language=en-US`;

  const response = await fetch(link);
  const data = await response.json();
  return res.status(200).json(data);
}
