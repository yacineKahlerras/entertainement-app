export default async function handler(req, res) {
  const { mediaType } = req.body;

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${process.env.API_KEY}`
  );
  const data = await response.json();
  return res.status(200).json(data);
}
