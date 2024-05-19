const personagens1 = [
  { nivel: 42, nome: "Thrall1", raca: "Orc1", classe: "Xamã1" },
  { nivel: 28, nome: "Garrosh1", raca: "Orc1", classe: "Guerreiro1" },
  { nivel: 35, nome: "Varok1", raca: "Orc1", classe: "Guerreiro1" },
  { nivel: 35, nome: "Uther1", raca: "Humano1", classe: "Paladino1" },
  { nivel: 26, nome: "Jaina1", raca: "Humano1", classe: "Maga1" },
  {
    nivel: 39,
    nome: "Tyrande1",
    raca: "Elfo Noturno1",
    classe: "Sacerdotisa1",
  },
  { nivel: 29, nome: "Muradin1", raca: "Anão1", classe: "Guerreiro1" },
];

// const nomes = [];

// for (let i = 0; i < personagens1.length; i++) {
//   nomes.push(personagens1[i].nome);
// }

// Map

const nomes = personagens1.map(function (personagem) {
  return personagem.nome;
  // return { nome: personagem.nome, raca: personagem.raca }; nesse caso você chamaria mais de um objeto.
});

console.log(nomes);
console.log("======   MAP   ======");

// Filter

const personagens2 = [
  { nivel: 42, nome: "Thrall2", raca: "Orc2", classe: "Xamã2" },
  { nivel: 28, nome: "Garrosh2", raca: "Orc2", classe: "Guerreiro2" },
  { nivel: 35, nome: "Varok2", raca: "Orc2", classe: "Guerreiro2" },
  { nivel: 35, nome: "Uther2", raca: "Humano2", classe: "Paladino2" },
  { nivel: 26, nome: "Jaina2", raca: "Humano2", classe: "Maga2" },
  {
    nivel: 39,
    nome: "Tyrande2",
    raca: "Elfo Noturno2",
    classe: "Sacerdotisa2",
  },
  { nivel: 29, nome: "Muradin2", raca: "Anão2", classe: "Guerreiro2" },
];

// const orcs = [];

// for (let i = 0; i < personagens2.length; i++) {
//   if (personagens2[i].raca === "Orc") {
//     orcs.push(personagens2[i]);
//     // orcs.push({ nome: personagens2[i].nome, raca: personagens2[i].raca });
//   }
// }

// const orcs = personagens2
//   .filter(function (personagem) {
//     return personagem.raca === "Orc";
//   })
//   .map(function (personagemOrcs) {
//     return { nome: personagemOrcs.nome, raca: personagemOrcs.raca };
//   });

// console.log(orcs);

const orcs = personagens2.filter(function (personagemOrcs) {
  return personagemOrcs.raca === "Orc2";
});

console.log(orcs);
console.log("======   FILTER   ======");

// Reduce

const personagens3 = [
  { nivel: 42, nome: "Thrall3", raca: "Orc3", classe: "Xamã3" },
  { nivel: 28, nome: "Garrosh3", raca: "Orc3", classe: "Guerreiro3" },
  { nivel: 35, nome: "Varok3", raca: "Orc3", classe: "Guerreiro3" },
  { nivel: 35, nome: "Uther3", raca: "Humano3", classe: "Paladino3" },
  { nivel: 26, nome: "Jaina3", raca: "Humano3", classe: "Maga3" },
  {
    nivel: 39,
    nome: "Tyrande3",
    raca: "Elfo Noturno3",
    classe: "Sacerdotisa3",
  },
  { nivel: 29, nome: "Muradin3", raca: "Anão3", classe: "Guerreiro3" },
];

const nivelTotal = personagens3.reduce(function (
  valorAcumulado,
  personagemAtual
) {
  return valorAcumulado + personagemAtual.nivel;
},
0);

console.log(nivelTotal);

const raca3 = personagens3.reduce(function (racaAcumulada, racaAtual) {
  if (racaAcumulada[racaAtual.raca]) {
    racaAcumulada[racaAtual.raca].push(racaAtual);
  } else {
    racaAcumulada[racaAtual.raca] = [racaAtual];
  }
  return racaAcumulada;
}, {});
console.log(raca3);
console.log("======   REDUCE   ======");
