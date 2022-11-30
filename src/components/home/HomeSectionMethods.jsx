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
    const movieMonth = String(dataResults[0].release_date).slice(5, 7);

    console.log(
      `movie: ${movieMonth}; thisMonth: ${thisMonth}; lastMonth: ${lastMonth}`
    );

    if (thisYear !== String(dataResults[i].release_date).slice(0, 4)) continue;
    if (movieMonth !== thisMonth && movieMonth !== lastMonth) continue;

    newList.push(dataResults[i]);
  }
  return newList;
}
