function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return "A media de " + a + " + " + b + " / 2 " + " = " + media;
}

let valor1 = parseFloat(prompt("Informe o primeiro valor: "));
let valor2 = parseFloat(prompt("Informe o segundo valor: "));

console.log((resultado = calcularMedia(valor1, valor2)));

function produtos(cafe, leite) {
  console.log("Produto Café:", cafe.nomeCafe);
  console.log("Densidade do Café:", cafe.densidadeCafe);
  console.log("Preço:", cafe.precoCafe);

  console.log("\nProduto Leite:", leite.nomeLeite);
  console.log("Densidade do Leite:", leite.densidadeLeite);
  console.log("Preço:", leite.precoLeite);
}

const informacaoDosProdutos = {
  cafe: {
    nomeCafe: "3 Corações",
    densidadeCafe: "Extra Forte",
    precoCafe: "15,00 R$",
  },
  leite: {
    nomeLeite: "Vaca",
    densidadeLeite: "Vaca Magra",
    precoLeite: "7,90 R$",
  },
};
const cafe = informacaoDosProdutos.cafe;
const leite = informacaoDosProdutos.leite;

produtos(cafe, leite);

function texto1() {
  let texto2 = "vasco";
  let texto3 = 3;
  console.log(texto3);
  return texto2;
}

console.log(texto1());

function maiorIdade(idade) {
  if (idade >= 18) {
    return "Maior de Idade! " + idade;
  } else {
    return "Menor de Idade! " + idade;
  }
}

// console.log(maiorIdade(18));
// console.log(maiorIdade(8));
idade = 120;
console.log(maiorIdade(idade));
