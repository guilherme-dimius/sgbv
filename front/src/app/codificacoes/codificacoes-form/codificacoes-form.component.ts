import { Component, OnInit } from '@angular/core';
import { CodificacaoService, Codificacao } from '../../services/codificacao/codificacao.service'
import { Router, ActivatedRoute } from '@angular/router'

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
    private cs : CodificacaoService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() 
  {  
    this.model = new Codificacao()
    this.aRoute.params.subscribe(
    // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
    params => {
      if(params['id']) 
      {
        // Buscamos o objeto para edição
        this.cs.obterPorId(params['id']).subscribe(
          (existente: Codificacao) => this.model = existente
        )
      }
    })
  }

  enviar() 
  {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.cs.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à página de listagem
      () => roteador.navigate(['/codificacoes']),
      erro => console.error(erro)
    )
  }

}
