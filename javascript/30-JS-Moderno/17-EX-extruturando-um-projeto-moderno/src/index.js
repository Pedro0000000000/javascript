import "./styles/index.css";

function calcularOperacoes(a, b) {
  let soma = a + b;
  let subtracao = a - b;
  let multiplicacao = a * b;
  let divisao = a / b;

  console.log(`Soma: ${soma}`);
  console.log(`Subtração: ${subtracao}`);
  console.log(`Multiplicação: ${multiplicacao}`);
  console.log(`Divisão: ${divisao}`);

  // Retorna um objeto com os resultados das operações
  return { soma, subtracao, multiplicacao, divisao };
}

const numeros = prompt(
  `Insira dois números separados por vírgula "," Exemplo: (1,2)
`
);

const [a, b] = numeros.split(",").map(Number);

// Armazena os resultados retornados pela função
const resultado = calcularOperacoes(a, b);

// Função hello que acessa a soma dos resultados
const hello = () =>
  console.log(
    `A importância de saber usar WebPack, soma: de ${a} + ${b} = ${resultado.soma}`
  );

hello();
