const word = prompt("Informe uma palavra");
let invertedWord = "";

//  (     INICIALIZAÇÃO; ENQUANTO ; FINALIZANDO)
for (let i = word.length - 1; i >= 0; i--) {
  invertedWord += word[i];
}

if (word === invertedWord) {
  alert(word + " é um polindromo\n\n" + word + " == " + invertedWord);
} else {
  alert(word + " não é um polindromo!\n\n" + word + " !== " + invertedWord);
}

// const word = prompt("Informe uma palavra");
// let invertedWord = "";
// let penultimateLetter = "";

// for (let i = word.length - 1; i >= 0; i--) {
//   invertedWord += word[i];
//   if (i === word.length - 2) {
//     penultimateLetter = word[i];
//   }
// }

// if (word === invertedWord) {
//   alert(word + " é um palíndromo\n\n" + word + " == " + invertedWord);
// } else {
//   alert(word + " não é um palíndromo!\n\n" + word + " !== " + invertedWord);
// }

// alert("A penúltima letra da palavra " + word + " é " + penultimateLetter);
