let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

//6.
// console.log(
//   "O livro favorito de",
//   leitor.nome,
//   leitor.sobrenome,
//   "se chama",
//   leitor.livrosFavoritos[0].titulo
// );

//7.
leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});

// console.log(
//   leitor.nome,
//   "tem 2 livros favoritos, são eles:",
//   leitor.livrosFavoritos[0].titulo,
//   "e",
//   leitor.livrosFavoritos[1].titulo
// );
