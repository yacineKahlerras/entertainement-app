// gets the oroginal big list and makes a new limited one base
// on the populariy
export function PopularList(dataResults) {
  let popularResults = [];
  for (let i = 0; i < dataResults.length; i++) {
    if (dataResults[i].popularity > 500 && dataResults[i].video === false)
      popularResults.push(dataResults[i]);
    if (popularResults.length >= 9) {
      console.log(dataResults[i].title);
      break;
    }
  }
  return popularResults;
}
