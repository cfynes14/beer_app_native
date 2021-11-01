const endPointGenerator = (abv: string, type: string) => {
  let endPoint;

  console.log("type is..." + type);
  console.log(abv);

  //if user selects ABV and no type
  if (typeof abv === "number" && type === null) {
    console.log("no type");
    endPoint = `https://api.punkapi.com/v2/beers/?abv_gt=${abv}`;
  }

  if (typeof abv === "number" && type === "") {
    console.log("no type");
    endPoint = `https://api.punkapi.com/v2/beers/?abv_gt=${abv}`;
  }

  //if user selects type and no ABV
  if (typeof abv === "string") {
    console.log("type no abv");
    endPoint = `https://api.punkapi.com/v2/beers/?beer_name=${type}`;
  }

  //if user selects ABV and type
  if (typeof abv === "number" && type !== null) {
    console.log("both");
    endPoint = `https://api.punkapi.com/v2/beers/?beer_name=${type}&abv_gt=${abv}`;
  }

  console.log(endPoint);
  return endPoint;
};

export default endPointGenerator;
