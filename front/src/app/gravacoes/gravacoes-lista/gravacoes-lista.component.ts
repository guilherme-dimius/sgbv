import { Component, OnInit } from '@angular/core';
import { GravacaoService } from '../../services/gravacao/gravacao.service';
import * as moment from 'moment'

@Component({
  selector: 'app-gravacoes-lista',
  templateUrl: './gravacoes-lista.component.html',
  styleUrls: ['./gravacoes-lista.component.css'],
  providers: [GravacaoService]
})

export class GravacoesListaComponent implements OnInit 
{
  private gravacoes : any
  private titulo = 'Lista de gravacoes'
   
  constructor(private service: GravacaoService) 
  { 
    this.atualizarLista()   
  }

  atualizarLista() 
  {
    this.service.listarTodos().subscribe((dados: Response) => this.gravacoes = dados)
  }

  excluir(id: string) 
  {
    if(confirm('Deseja realmente excluir esta gravação?')) 
    {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista()
      )
    }
  }

  ngOnInit() { }
}