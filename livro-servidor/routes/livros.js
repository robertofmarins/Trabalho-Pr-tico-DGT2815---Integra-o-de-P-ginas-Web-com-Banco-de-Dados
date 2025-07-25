// routes/livros.js
const express = require('express');
const router = express.Router();

const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// GET /livros - retorna todos os livros em JSON
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter livros', erro: error.message });
  }
});

// POST /livros - inclui um novo livro
router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    await incluir(livro);
    res.json({ mensagem: 'Livro incluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao incluir livro', erro: error.message });
  }
});

// DELETE /livros/:id - exclui livro pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const codigo = req.params.id;
    await excluir(codigo);
    res.json({ mensagem: 'Livro excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir livro', erro: error.message });
  }
});

module.exports = router;
