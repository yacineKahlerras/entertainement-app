import { sectionData } from "../Home";

/** gets the title of the section */
export function GetTitle(categoryList) {
  for (let i = 0; i < sectionData.length; i++) {
    if (categoryList === sectionData[i].linkKeyword)
      return sectionData[i].title;
  }
}
