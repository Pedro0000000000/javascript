// Definindo constantes e variáveis
const a = 0; // 'a' recebe o valor 0
const b = null; // 'b' recebe o valor null
const c = "Teste"; // 'c' recebe o valor "Teste"
const d = 5; // 'd' recebe o valor 5

// Usando operador lógico OU (||)
console.log(a || b || c || d); // Saída: Teste
// Explicação: Retorna o primeiro valor verdadeiro encontrado da esquerda para a direita.
// 'a' é falso (0), 'b' é falso (null), 'c' é verdadeiro ("Teste"), então retorna "Teste".
console.log("=================================================");
// Usando operador de coalescência nula (??)
console.log(a ?? b ?? c ?? d); // Saída: 0
// Explicação: Retorna o primeiro valor definido (não nulo e não undefined) da esquerda para a direita.
// 'a' é definido como 0, então retorna 0. 'b' é null, 'c' é uma string definida ("Teste"), 'd' é definido como 5, então nunca chega a retornar d.
console.log("=================================================");
// Demonstração com variáveis AA e AB
let AA = 0; // 'AA' recebe o valor 0
let AB = AA || 42; // 'AB' recebe o valor de 'AA' se 'AA' for verdadeiro, senão 42

console.log({ AA, AB }); // Saída: { AA: 0, AB: 42 }
// Explicação: 'AA' é 0 (falso), então 'AB' recebe o valor 42 (porque 0 é falso).
console.log("=================================================");
// Demonstração com variáveis BA e BB
let BA = 0; // 'BA' recebe o valor 0
let BB = BA ?? 50; // 'BB' recebe o valor de 'BA' se 'BA' for definido, senão 50

console.log({ BA, BB }); // Saída: { BA: 0, BB: 0 }
// Explicação: 'BA' é definido como 0, então 'BB' recebe o valor 0 (porque 0 é definido).
