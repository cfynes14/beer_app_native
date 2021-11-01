import { Beers, Hop } from "./interfaces";
import Sanitizer from "./sanitizer";

const hopFinder = (beerArray: Beers[]): string[] => {
  let hops: Hop[][] = [];
  let newArray: string[] = [];
  let hopArray: string[] = [];

  beerArray.map((beer) => hops.push(beer.ingredients.hops));

  for (let i = 0; i < hops.length; i++) {
    for (let j = 0; j < hops[i].length; j++) {
      hopArray.push(hops[i][j].name);
    }
  }

  newArray = Sanitizer.removeDuplicates(hopArray);
  newArray = newArray.sort();

  return newArray;
};

export default hopFinder;
