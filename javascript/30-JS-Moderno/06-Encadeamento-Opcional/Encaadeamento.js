const user = {
  name: "John Doe", // Nome do usuário
  email: "doejohn@email.com", // Email do usuário
  friends: [
    {
      // Lista de amigos do usuário (apenas um amigo aqui)
      name: "Mary", // Nome do amigo
      address: {
        // Endereço do amigo
        street: "Some Street", // Rua do endereço
        number: 89, // Número da casa
      },
    },
  ],
  age: 42, // Idade do usuário
  phone: {
    // Informações de telefone do usuário
    countryCode: "+55", // Código do país
    ddd: "22", // Código de área
    number: "998765432", // Número do telefone
  },
};

// console.log(user.friends[0].phone.ddd)
// Linha comentada acima: Tenta acessar o código de área (DDD) do primeiro amigo, mas falhará porque `phone` não existe no objeto amigo.

// Linha abaixo: Uso do operador de encadeamento opcional para acessar o DDD do telefone do primeiro amigo.
// Caso `phone` não exista, ele retorna `undefined` em vez de gerar erro.
console.log(user.friends[0].phone?.ddd);

// Linha abaixo: Tenta acessar a propriedade `length` da lista `brothers`, se existir. Se `brothers` não existir, retorna `undefined` sem erro.
console.log(user?.brothers?.length);

// Linha abaixo: Tenta acessar o nome do sexto irmão (índice 5) se a lista `brothers` existir e tiver pelo menos seis elementos.
// Caso contrário, retorna `undefined` sem erro.
console.log(user.brothers?.[5].name);
