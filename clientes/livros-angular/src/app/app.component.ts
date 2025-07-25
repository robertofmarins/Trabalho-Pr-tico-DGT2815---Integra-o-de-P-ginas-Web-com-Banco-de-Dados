import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  livros = [
    {
      titulo: 'Use a Cabeça: Java',
      resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.',
      editora: 'Alta Books',
      autores: ['Bert Bates', 'Kathy Sierra']
    },
    {
      titulo: 'Java, como Programar',
      resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
      editora: 'Pearson',
      autores: ['Paul Deitel', 'Harvey Deitel']
    }
  ];

  excluirLivro(livro: any) {
    this.livros = this.livros.filter(l => l !== livro);
  }
}
