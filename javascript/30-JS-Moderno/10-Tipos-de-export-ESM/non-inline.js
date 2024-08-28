// Função exportada nomeadamente como parte de um grupo do arquivo "non-inline.js"
function group() {
  console.log("Export nomeado não-inline (agrupado)");
}

// Funções individuais exportadas nomeadamente do arquivo "non-inline.js"
function a(number) {
  console.log(`Valor ${number}`);
}
function b(number) {
  console.log(`Valor ${number}`);
}
function c(number) {
  console.log(`Valor ${number}`);
}
function d(number) {
  console.log(`Valor ${number}`);
}

// Função exportada como default do arquivo "non-inline.js"
function exportDefault() {
  console.log("Export default não-inline");
}

// Exportando as funções agrupadas do arquivo "non-inline.js"
export { group, a, b, c, d };

// Exportando a função default do arquivo "non-inline.js"
export default exportDefault;
