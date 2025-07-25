const banco = require('./conexao');  // importa a conexão mongoose

const LivroSchema = new banco.Schema({
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

// Aqui você associa o schema 'LivroSchema' à coleção 'livros' com o nome de modelo 'Livro'
const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;  // exporta o modelo para usar em outras partes do projeto
