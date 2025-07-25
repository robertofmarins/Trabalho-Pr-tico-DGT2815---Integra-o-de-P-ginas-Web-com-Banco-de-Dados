// livro-dao.js
const Livro = require('./livro-schema');

// Função para obter todos os livros
const obterLivros = async () => {
  return await Livro.find();
};

// Função para incluir um livro novo
const incluir = async (livro) => {
  return await Livro.create(livro);
};

// Função para excluir um livro pelo código (_id)
const excluir = async (codigo) => {
  return await Livro.deleteOne({ _id: codigo });
};

module.exports = {
  obterLivros,
  incluir,
  excluir
};
