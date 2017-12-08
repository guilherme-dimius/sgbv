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
    this.atualizarLista()   
  }

  atualizarLista() 
  {
    this.service.listarTodos().subscribe((dados: Response) => this.codificacoes = dados)
  }

  excluir(id: string) 
  {
    if(confirm('Deseja realmente excluir esta codificação?')) 
    {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista()
      )
    }
  }

  ngOnInit() { }
}
