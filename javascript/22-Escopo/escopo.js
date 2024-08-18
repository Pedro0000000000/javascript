let pokemon = "Charmander 1.0";
let dragon = "Dragon 1";

function evoluir() {
  pokemon = "Charmander 1.1";
  dragon = "Dragon 2";
  console.log(dragon);
  return pokemon;
}
// let novoPokemon = evoluir();

console.log((novoPokemon = evoluir()));

let gato = "Pull";
function cat() {
  gato += " Garfield";
  console.log(gato);
}

console.log(gato);
cat();
console.log(gato);
