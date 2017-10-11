import { Component, OnInit } from '@angular/core'
import { CodificacaoService } from '../../services/codificacao/codificacao.service'

@Component(
{
  selector: 'app-codificacoes-lista',
  templateUrl: './codificacoes-lista.component.html',
  styleUrls: ['./codificacoes-lista.component.css'],
  providers: [ CodificacaoService ]
})
export class CodificacoesListaComponent implements OnInit 
{
  private codificacoes : any
  private title = 'Lista de codificacoes de voz'
  
  constructor(private service: CodificacaoService) 
  { 
    this.service.listarTodos().subscribe((dados : Response) => this.codificacoes = dados)
  }

  ngOnInit() { }
}
