// Declaração do primeiro objeto `person`
const person = {
  name: "Luke", // Nome da pessoa
  job: "Farmer", // Profissão
  parents: ["Anakin", "Padme"], // Lista de pais
};

// Declaração do segundo objeto `person2`
const person2 = {
  name: "Pedro", // Nome da pessoa
  job: "Dev", // Profissão
  parents: ["Joao", "Flavia"], // Lista de pais
};

// Função `createrUser` que desestrutura o objeto recebido
function createrUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999); // Gera um ID aleatório
  const nomeOBJ = id + "-" + name; // Concatena o ID com o nome
  return {
    id: nomeOBJ, // Retorna o ID concatenado com o nome
    name, // Retorna o nome original
    job, // Retorna a profissão
    parents, // Retorna a lista de pais
  };
}

// Outra versão da função `createrUser`, comentada, que usa o objeto `person` sem desestruturação
/*
function createrUser(person) {
  const id = Math.floor(Math.random() * 9999);  // Gera um ID aleatório
  const nomeOBJ = id + "-" + person.name;       // Concatena o ID com o nome
  return {
    id: nomeOBJ,   // Retorna o ID concatenado com o nome
    name: person.name,  // Retorna o nome original
    job: person.job,    // Retorna a profissão
    parents: person.parents // Retorna a lista de pais
  };
}
*/

// Chama a função `createrUser` com o objeto `person` e armazena o resultado em `LukeUser`
const LukeUser = createrUser(person);

// Chama a função `createrUser` com o objeto `person2` e armazena o resultado em `PedroUser`
const PedroUser = createrUser(person2);

// Exibe o objeto `LukeUser` no console
console.log(LukeUser);

// Exibe o objeto `PedroUser` no console
console.log(PedroUser);
