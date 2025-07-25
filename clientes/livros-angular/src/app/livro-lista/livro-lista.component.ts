import { Component, OnInit } from '@angular/core';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  livros: Livro[] = [];
  editoras: Editora[] = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditoras: ControleEditoraService
  ) {}

  ngOnInit(): void {
    this.servLivros.obterLivros().then(dados => this.livros = dados);
    this.editoras = this.servEditoras.getEditoras();
  }

  obterNome = (codEditora: number): string => {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : 'Desconhecida';
  }

  excluir = (codigo: string) => {
    this.servLivros.excluir(codigo).then(() => {
      this.servLivros.obterLivros().then(dados => this.livros = dados);
    });
  }
}
