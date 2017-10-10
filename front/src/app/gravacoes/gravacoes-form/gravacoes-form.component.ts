import { Component, OnInit } from '@angular/core';

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
  ) { }

  ngOnInit() 
  {  
    this.model = new Gravacao()    
    this.locutores = this.ls.listarTodos()
    this.bibliotecas = this.bs.listarTodos()
    this.codificacoes = this.cs.listarTodos()
  }
}
