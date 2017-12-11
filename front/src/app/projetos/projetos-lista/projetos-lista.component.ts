import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../services/projeto/projeto.service';
import * as moment from 'moment'

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
    this.atualizarLista()
  }

  atualizarLista() 
  {
    this.service.listarTodos().subscribe((dados: Response) => this.projetos = dados)
  }

  excluir(id: string) 
  {
    if(confirm('Deseja realmente excluir este projeto?')) 
    {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista()
      )
    }
  }

  ngOnInit() { }
}
