import { Component, OnInit } from '@angular/core';
import { GravacaoService } from '../../services/gravacao/gravacao.service';

@Component({
  selector: 'app-gravacoes-lista',
  templateUrl: './gravacoes-lista.component.html',
  styleUrls: ['./gravacoes-lista.component.css'],
  providers: [GravacaoService]
})

export class GravacoesListaComponent implements OnInit 
{
  private titulo = 'Lista de gravacoes'
  private gravacoes : any
  
  constructor(private service: GravacaoService) 
  { 
    this.service.listarTodos().subscribe(dados => this.gravacoes = dados)
  }

  ngOnInit() { }
}
