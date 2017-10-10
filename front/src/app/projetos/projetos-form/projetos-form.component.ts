import { Component, OnInit } from '@angular/core';
import { ProjetoService, Projeto } from '../../services/projeto/projeto.service'
import { BibliotecaService, Biblioteca } from '../../services/biblioteca/biblioteca.service'

@Component({
  selector: 'app-projetos-form',
  templateUrl: './projetos-form.component.html',
  styleUrls: ['./projetos-form.component.css'],
  providers: [ProjetoService, BibliotecaService]
})

export class ProjetosFormComponent implements OnInit 
{
  private title = 'Novo projeto'
  private model : Projeto
  private bibliotecas : any
  
  constructor(
    private ps : ProjetoService,
    private bs : BibliotecaService
  ) { }

  ngOnInit() 
  {  
    this.model = new Projeto()
    this.bibliotecas = this.bs.listarTodos()
  }
}
