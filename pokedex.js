// let allInfo;

// async function gen1Pokemon() {
//     let gen1 = await axios.get('https://pokeapi.co/api/v2/generation/1');
//     let allPoke = gen1.data.pokemon_species;
//     return printPokemon(allPoke)
// }

// async function printPokemon(results) {
//     let allGen1 = [];
//     for (let i = results.length-1; i > 0; i--){
//         let pokeURL = results[i].url
//         let getInfo = axios.get(pokeURL)
//         allGen1.push(getInfo)
//     };
//     allInfo = await Promise.all(allGen1);
//     return allInfo;
// }

// let pokeData = gen1Pokemon().then(() => {
//     return allInfo
// });


// //-----------

async function gen1Pokemon() {
    let gen1 = await axios.get('https://pokeapi.co/api/v2/generation/1');
    let allPoke = gen1.data.pokemon_species;
    return printPokemon(allPoke);
}

async function printPokemon(results) {
    console.log(results)
    let allGen1 = [];
    for (let i = results.length - 1; i >= 0; i--){ 
        let pokemonName = results[i].name;
        let getInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
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

//--------------------

/* Make an array of objects to style the types
    types:[
      grass: {
        bgColor: light-green,
        textColor: dark-green
      },
      fire: {
        bgColor: light-red,
        textColor: dark-red
      }
    ]
*/