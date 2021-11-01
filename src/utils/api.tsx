const Calls = {
  findBeer: async () => {
    console.log("finding beer");
    const res = await fetch(`https://api.punkapi.com/v2/beers`);
    const json = await res.json();
    return json;
  },
  filterBeer: async () => {}
};

export default Calls;
