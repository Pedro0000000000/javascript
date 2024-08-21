// Define um array de cidades
const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

// Exibe o array original
console.log(towns); // Saída: ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
console.log("Array original ^");
// Exibe os elementos do array separados por espaço
console.log(...towns); // Saída: Prontera Izlude Payon Alberta Geffen Morroc
console.log("Array ...original ^");
// Exibe os caracteres da primeira cidade separados por espaço
console.log(...towns[0]); // Saída: P r o n t e r a
console.log("Array ...original[0] ^");
// townsCopy é uma referência ao array original towns
const townsCopy = towns;

// Modifica townsCopy, o que também modifica towns, já que é uma referência
townsCopy.pop(); // Remove 'Morroc'
townsCopy.pop(); // Remove 'Geffen'
townsCopy.push("Juno"); // Adiciona 'Juno' ao final

// Exibe o array original e a cópia referenciada, ambos modificados
console.log({ towns, townsCopy });
console.log("Array original + Array copia com modificação em ambos^");
// Saída: { towns: ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Juno'], townsCopy: ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Juno'] }

// Cria uma cópia real do array original usando o operador spread
const townsClone = [...towns];

// Modifica a cópia real sem afetar o array original
townsClone.push("Aldebaran"); // Adiciona 'Aldebaran' ao final

// Exibe o array original, a cópia referenciada e a cópia real
console.log({ towns, townsCopy, townsClone });
console.log(`Array original ^
Array Copia Real ^
Array Copia ^`);
// Saída: { towns: ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Juno'], townsCopy: ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Juno'], townsClone: ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Juno', 'Aldebaran'] }

// Converte o array em um objeto, onde os índices são as chaves
const townsObj = { ...towns };
// Clona o objeto criado acima
const townsObjClone = { ...townsObj };

// Adiciona uma nova propriedade ao clone do objeto
townsObjClone.test = "Test";

// Exibe o objeto original e o clone modificado
console.log({ townsObj, townsObjClone });
// Saída: { townsObj: { '0': 'Prontera', '1': 'Izlude', '2': 'Payon', '3': 'Alberta', '4': 'Juno' }, townsObjClone: { '0': 'Prontera', '1': 'Izlude', '2': 'Payon', '3': 'Alberta', '4': 'Juno', test: 'Test' } }
