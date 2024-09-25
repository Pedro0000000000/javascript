// const book = {
//   title: "Biblia Sagrada",
//   pages: 4124,
//   published: true,
//   inStock: 100000,
//   tags: ["Historia", "Baseado em fatos reais"],
//   author: {
//     nome: [
//       "Moises",
//       "Josué",
//       "Samuel",
//       "Jeremias",
//       "Esdras",
//       "Neemias",
//       "Eliaquin",
//       "ETC...",
//     ],
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
// };

// // Exibindo o objeto book inicialmente
// console.log(book);

// // Aumentando o estoque
// book.addOnStock(100);

// // Adicionando o método save
// book.save = function () {
//   console.log("Deus abençoe");
// };

// // Chamando o método save para exibir a mensagem
// book.save();

// // Exibindo o objeto book após adicionar o método save
// console.log(book);

console.log(
  "-----------------------------------------------------------------------------------"
);

function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;

  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };

  this.save = function () {
    console.log("Deus abençoe");
  };
}

// const title = { title: "Biblia Sagrada" };
// const pages = { pages: 4124 };
const tags = ["Historia", "Baseado em fatos reais"];
const author = {
  name: [
    "Moises",
    "Josué",
    "Samuel",
    "Jeremias",
    "Esdras",
    "Neemias",
    "Eliaquin",
    "ETC...",
  ],
};

const BibliaSagrada = new Book(
  "Biblia Sagrada",
  4124,
  ["Historia", "Baseado em fatos reais"],
  author
);

console.log(BibliaSagrada);

console.log(
  "-----------------------------------------------------------------------------------"
);

const NovoTestamento = new Book("Novo Testamento", 2000, tags, [
  "Mateus",
  "Marcos",
  "ETC...",
]);

console.log(NovoTestamento);
