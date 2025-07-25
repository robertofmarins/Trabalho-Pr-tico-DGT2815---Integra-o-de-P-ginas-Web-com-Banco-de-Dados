const mongoose = require('mongoose');

const banco = mongoose;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// URL de conexão com o banco "livraria"
const url = 'mongodb://localhost:27017/livraria';

// Efetuar a conexão
banco.connect(url, options)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
  })
  .catch((erro) => {
    console.error('Erro ao conectar no MongoDB:', erro);
  });

// Exportar o mongoose (banco)
module.exports = banco;
