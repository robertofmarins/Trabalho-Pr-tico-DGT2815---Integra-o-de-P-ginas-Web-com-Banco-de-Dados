import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id?: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  constructor() {}

  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL);
    const dados: LivroMongo[] = await response.json();
    return dados.map(d => {
      const livro = new Livro();
      livro.codigo = d._id || '';
      livro.codEditora = d.codEditora;
      livro.titulo = d.titulo;
      livro.resumo = d.resumo;
      livro.autores = d.autores;
      return livro;
    });
  }

  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE'
    });
    const resultado = await response.json();
    return resultado.ok;
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livroMongo)
    });
    return response.ok;
  }
}
