import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../services/projeto/projeto.service';

@Component({
  selector: 'app-projetos-lista',
  templateUrl: './projetos-lista.component.html',
  styleUrls: ['./projetos-lista.component.css'],
  providers: [ProjetoService]
})

export class ProjetosListaComponent implements OnInit 
{
  private titulo = 'Lista de projetos'
  private projetos : any
  
  constructor(private service: ProjetoService) 
  { 
    this.service.listarTodos().subscribe(dados => this.projetos = dados)
  }

  ngOnInit() { }
}
