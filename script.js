const output = document.getElementById("output");

async function getPokeApi() {
  try {
    //limit increased to original 151
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    if (!res.ok) {
    }
    const data = await res.json();
    //logged 151st pokemon, Mew + mew's second ability to show increased limit + parsing json data.
    console.log(data.results[150].name);
    //pass to a different function
    getPokemonData(data.results[150].url);
  } catch (err) {
    console.log(err);
  }
}

async function getPokemonData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
    }
    const data = await res.json();
    //log mew's 10th move
    output.textContent = `Mew's 10th learned move is: ${data.moves[9].move.name}!`;
  } catch (err) {
    console.log(err);
  }
}
getPokeApi();
