import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service'; // importar
import { Livro } from '../livro';
import { Editora } from '../editora'; // importar modelo Editora

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  livro: Livro = new Livro();
  autoresForm: string = '';
  editoras: Editora[] = [];  // declarar aqui

  constructor(
    private servLivros: ControleLivrosService,
    private servEditoras: ControleEditoraService, // injetar
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditoras.getEditoras(); // preencher editoras no init
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro).then(ok => {
      if (ok) this.router.navigateByUrl('/lista');
      else alert('Erro ao incluir livro');
    });
  }
}
