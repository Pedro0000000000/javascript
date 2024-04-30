let pessoas = {
  nome: "Pedro",
  sobrenome: "Henrique",
  idade: 19,
  dizernome() {
    console.log(
      "Esse usuario " + this.nome + " " + this.sobrenome + " é sensacional"
    );
  },
};

console.log(pessoas);

console.log(pessoas.nome, pessoas.idade);

pessoas.dizernome();

// this. ele diz que isso é um objeto
