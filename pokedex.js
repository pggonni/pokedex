async function gen1Pokemon() {
    let gen1 = await axios.get('https://pokeapi.co/api/v2/pokemon');
    let allPoke = gen1.data.pokemon_species;
    return printPokemon(allPoke);
}

async function printPokemon(results) {
    console.log(results)
    let allGen1 = [];
    for (let i = 0; i <= 20; i++){ 
        let pokemonName = results[i].name;
        let getInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        let stateInfo = {modalShow: false, spriteFront: true};
        Object.assign(getInfo.data, stateInfo);
        allGen1.push(getInfo.data);
    };
    console.log(allGen1)
    return allGen1;
}


function data() {
  return {
      pokeData: [],
      init() {
        gen1Pokemon().then((resolve) => {
          this.pokeData = resolve;
        });
      }
  }
}
