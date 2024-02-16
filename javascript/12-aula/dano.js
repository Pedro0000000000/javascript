const atacante = prompt("Insira o Nome do Personagem Atacante: ");
let poderDeAtaque = parseFloat(
  prompt("Insira o Poder de Ataque do " + atacante)
);
const numerosDeAtaques = parseFloat(
  prompt(
    "Insira o Numero de Ataques Que o " + atacante + " Vai Dar no Adversario: "
  )
);

const defensor = prompt("Insira o Nome do Personagem Defensor: ");
let pontosDeVida = parseFloat(
  prompt("Insira a Quantidade de Vida do " + defensor)
);

const poderDeDefesa = parseFloat(prompt("Poder de Defesa do " + defensor));
const possuiEscudo = prompt("O Defensor Possuirá Escudo? (Sim/Não)");

let danoCausado = 0;
let pontoDeVidaPoisAtaque = pontosDeVida;
let danoXataques = poderDeAtaque * numerosDeAtaques;
pontoDeVidaPoisAtaque + poderDeDefesa;
// damageCaused = attackPower - defenderSPower;

if (danoXataques > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = danoXataques - poderDeDefesa;
} else if (danoXataques > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (danoXataques - poderDeDefesa) / 2;
}

pontoDeVidaPoisAtaque -= danoCausado;

alert(
  "Nome do Atacante: " +
    atacante +
    "\nDano do " +
    atacante +
    ": " +
    poderDeAtaque +
    "\nTotais de Golpes: " +
    numerosDeAtaques +
    "\nDano Causado: " +
    danoXataques +
    "," +
    " -" +
    poderDeDefesa +
    " Do Escudo" +
    " = " +
    danoCausado +
    " de Dano Causado" +
    "\nNome do Defensor: " +
    defensor +
    "\nPonto de Vida do " +
    defensor +
    ": " +
    pontosDeVida +
    " \nPonto de Vida do " +
    defensor +
    " Depois dos Ataques Sofridos: " +
    pontoDeVidaPoisAtaque +
    "\nO " +
    defensor +
    " Possui " +
    poderDeDefesa +
    " De Defesa " +
    "\n" +
    defensor +
    " Possui Escudo? " +
    possuiEscudo +
    "\n\nEsses Dois Personagens Super Poderosos Entraram Numa Grande Batalha, Onde o Atacante " +
    atacante +
    " Causava " +
    danoCausado +
    " De Dano no " +
    defensor +
    " e o Defensor ficava com " +
    pontoDeVidaPoisAtaque +
    " Pontos de Vida"
);
