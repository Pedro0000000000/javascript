const arr = [
  "Frodo",
  "San",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);
console.log(arr.length);
// let comeco = arr.length;
// console.log(comeco);

// ADICIONAR ELEMENTOS
// push = adicionar elemento(s) no final da array
let tamanho = arr.push("Vasco2");
console.log(arr);
console.log(tamanho);

// unshift = adicionar elemento(s) no começo da array
tamanho = arr.unshift("Vasco1");
console.log(arr);
console.log(tamanho);

// REMOVER ELEMENTOS
// pop = remover elemento(s) no final da array

let ultimo_elemento = arr.pop("");
console.log(arr);
console.log(ultimo_elemento);
console.log(arr.length); // caso você queira que devolve o taanho do array

// shift = remover no começo

let primeiro_elemento = arr.shift("");
console.log(arr);
console.log(primeiro_elemento);

// pesquisar por um elemento
// includes = a verificar se um elemento existe num array

const inclui = arr.includes("Frodo");
console.log(arr);
console.log(inclui);

// index0f = pesquisar para saber se existe e para saber o indice do elemento

const i = arr.indexOf("Gimli");
console.log(i);

// contar e concatenar
// islice = cortar, = ´como se ele copiasse uma parte do array e salvasse em outro array

const hobbits = arr.slice(0, 4); // eu devo informar qual é o começo que eu quero pegar esse elemento e o final
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// const arr = [
//   "Frodo",
//   "San",
//   "Merry",
//   "Pippin",
//   "Gandalf",
//   "Aragorn",
//   "Legolas",
//   "Gimli",
// ];
// console.log("Array inicial:", arr);
// console.log("Tamanho inicial:", arr.length);

// // ADICIONAR ELEMENTOS
// // push = adicionar elemento(s) no final da array
// arr.push("Vasco1");
// console.log("Array após adicionar 'Vasco1':", arr);
// console.log("Tamanho após adicionar 'Vasco1':", arr.length);

// // unshift = adicionar elemento(s) no começo da array
// arr.unshift("Vasco2");
// console.log("Array após adicionar 'Vasco2' no começo:", arr);
// console.log("Tamanho após adicionar 'Vasco2' no começo:", arr.length);

// // REMOVER ELEMENTOS
// // pop = remover elemento(s) no final da array
// let elementoRemovido = arr.pop();
// console.log("Elemento Removido:", elementoRemovido);
// console.log("Array após remover o último elemento:", arr);
// console.log("Tamanho após remover o último elemento:", arr.length);
