// gets the oroginal big list and makes a new limited one base
// on the populariy
export function PopularList(dataResults, sectionSizeLimit) {
  let popularResults = [];
  for (let i = 0; i < dataResults.length; i++) {
    if (dataResults[i].popularity > 500 && dataResults[i].video === false)
      popularResults.push(dataResults[i]);
    if (popularResults.length >= sectionSizeLimit) {
      break;
    }
  }
  return popularResults;
}

/** gets the oiginal big list and
 * makes a limited coming to theaters one from it
 */
export function NowPlayingTheatersList(dataResults, sectionSizeLimit) {
  const newList = [];
  for (let i = 0; i < dataResults.length; i++) {
    if (newList.length >= sectionSizeLimit) break;
    if (dataResults[i].video !== false) continue;

    const thisYear = String(new Date().getFullYear());
    const thisMonth = String(new Date().getMonth() + 1);
    const lastMonth = String(new Date().getMonth());
    const movieMonth = String(dataResults[i].release_date).slice(5, 7);

    if (thisYear !== String(dataResults[i].release_date).slice(0, 4)) continue;
    if (movieMonth !== thisMonth && movieMonth !== lastMonth) continue;

    newList.push(dataResults[i]);
  }
  return newList;
}

/** gets the original list and makes
 * a new where movie dates are after today's date
 */
export function UpcomingMoviesList(dataResults, sectionSizeLimit) {
  const newList = [];
  for (let i = 0; i < dataResults.length; i++) {
    console.log(dataResults.length);
    if (newList.length >= sectionSizeLimit) break;
    if (dataResults[i].video !== false) continue;

    const date = new Date();
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth() + 1;
    const thisDay = date.getDate();

    const movieYear = parseInt(dataResults[i].release_date.slice(0, 4));
    const movieMonth = parseInt(dataResults[i].release_date.slice(5, 7));
    const movieDay = parseInt(dataResults[i].release_date.slice(8, 10));

    if (movieYear >= thisYear) {
      if (movieYear > thisYear) {
        newList.push(dataResults[i]);
        continue;
      }
      if (movieMonth >= thisMonth) {
        if (movieMonth > thisMonth) {
          newList.push(dataResults[i]);
          continue;
        }
        if (movieDay >= thisDay) {
          if (movieDay > thisDay) {
            newList.push(dataResults[i]);
            continue;
          }
        }
      }
    }
  }
  return newList;
}
