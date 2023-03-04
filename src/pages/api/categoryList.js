export default async function handler(req, res) {
  const link = GetFetchLink(req.body);
  if (!link) return;

  const response = await fetch(link);
  const data = await response.json();
  return res.status(200).json(data);
}

function GetFetchLink(props) {
  const { mediaType, categoryName, page, genresList, isGenres } = props;
  let newLink = undefined;

  if (isGenres) {
    genresList.forEach((genre) => {
      if (categoryName == genre.id) {
        newLink = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre.id}&with_watch_monetization_types=flatrate`;
      }
    });
    if (newLink != undefined) {
      return newLink;
    }
    return;
  }

  if (categoryName === "trending") {
    return `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${process.env.API_KEY}&page=${page}`;
  }
  return `https://api.themoviedb.org/3/${mediaType}/${categoryName}?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
}
