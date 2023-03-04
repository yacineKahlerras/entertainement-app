export default async function handler(req, res) {
  const { mediaType, linkKeyword } = req.body;
  const link = `https://api.themoviedb.org/3/${mediaType}/${linkKeyword}?api_key=${process.env.API_KEY}&language=en-US&page=1`;

  const response = await fetch(link);
  const data = await response.json();
  return res.status(200).json(data);
}
