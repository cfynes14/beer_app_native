import { Beers } from "./interfaces";

const filterFunction = (
  json: Beers[],
  abv: number | string,
  hop: string | null
): (Beers | undefined)[] => {
  let beersArray: Beers[] = [];

  //abv and no hop
  if (typeof abv === "number" && hop === null) {
    for (let i = 0; i < json.length; i++) {
      if (json[i].abv > abv) {
        beersArray.push(json[i]);
      }
    }
  }

  //hop and no abv
  if (abv === 0 && hop) {
    for (let i = 0; i < json.length; i++) {
      for (let j = 0; j < json[i].ingredients.hops.length; j++) {
        if (json[i].ingredients.hops[j].name.toLowerCase().includes(hop)) {
          beersArray.push(json[i]);
        }
      }
    }
  }

  //both search params
  if (abv > 0 && hop !== null) {
    for (let i = 0; i < json.length; i++) {
      for (let j = 0; j < json[i].ingredients.hops.length; j++) {
        if (
          json[i].ingredients.hops[j].name.toLowerCase().includes(hop) &&
          json[i].abv > abv
        ) {
          beersArray.push(json[i]);
        }
      }
    }
  }

  //remove duplicates
  const result: (Beers | undefined)[] = Array.from(
    new Set(beersArray.map((beer) => beer.name))
  ).map((name) => {
    return beersArray.find((beer) => beer.name === name);
  });

  return result;
};

export default filterFunction;
