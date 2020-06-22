async function gen1Pokemon() {
    let pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    let allPoke = pokemon.data.results;
    return printPokemon(allPoke);
}

async function printPokemon(res) {
    console.log(res[0])
    let allGen1 = [];
    for (let i = 0; i <= 19; i++){ 
        console.log(i)
        let pokemonName = res[i].name;
        let getInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        let stateInfo = {modalShow: false, spriteFront: true};
        Object.assign(getInfo.data, stateInfo);
        allGen1.push(getInfo.data);
    };
    // for (let pokemon of res){ 
    //   console.log(pokemon)
    //   let pokemonName = pokemon.name;
    //   let getInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    //   let stateInfo = {modalShow: false, spriteFront: true};
    //   Object.assign(getInfo.data, stateInfo);
    //   allGen1.push(getInfo.data);
    // };
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
