import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { GravacaoService, Gravacao } from '../../services/gravacao/gravacao.service'
import { LocutorService, Locutor } from '../../services/locutor/locutor.service'
import { BibliotecaService, Biblioteca } from '../../services/biblioteca/biblioteca.service'
import { CodificacaoService, Codificacao } from '../../services/codificacao/codificacao.service'

@Component({
  selector: 'app-gravacoes-form',
  templateUrl: './gravacoes-form.component.html',
  styleUrls: ['./gravacoes-form.component.css'],
  providers: [
  GravacaoService, 
  LocutorService,
  BibliotecaService,
  CodificacaoService
  ]
})

export class GravacoesFormComponent implements OnInit 
{
  private title = 'Nova gravação'
  private model : Gravacao  
  private locutores : any
  private bibliotecas : any
  private codificacoes : any
  
  constructor(
    private gs : GravacaoService,
    private ls : LocutorService,
    private bs : BibliotecaService,
    private cs : CodificacaoService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() 
  {  
    this.model = new Gravacao()    
    this.locutores = this.ls.listarTodos()
    this.bibliotecas = this.bs.listarTodos()
    this.codificacoes = this.cs.listarTodos()

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
      params => 
      {
        if(params['id']) 
        {
          // Buscamos o objeto para edição
          this.gs.obterPorId(params['id']).subscribe(
            (existente: Gravacao) => this.model = existente
          )
        }
      }
    )  
  }

  enviar()
  {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.gs.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à página de listagem
      () => roteador.navigate(['/gravacoes']),
      erro => console.error(erro)
    )
  }

}