import { Component, OnInit } from '@angular/core';
import { CodificacaoService, Codificacao } from '../../services/codificacao/codificacao.service'

@Component({
  selector: 'app-codificacoes-form',
  templateUrl: './codificacoes-form.component.html',
  styleUrls: ['./codificacoes-form.component.css'],
  providers: [CodificacaoService]
})

export class CodificacoesFormComponent implements OnInit 
{
  private title = 'Nova codificação'
  private model : Codificacao
  
  constructor(
    private bs : CodificacaoService,
  ) { }

  ngOnInit() 
  {  
    this.model = new Codificacao()
  }
}
