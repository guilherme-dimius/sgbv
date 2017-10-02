import { Component, OnInit } from '@angular/core'

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-gravacoes-lista',
  templateUrl: './gravacoes-lista.component.html',
  styleUrls: ['./gravacoes-lista.component.css']
})
export class GravacoesListaComponent implements OnInit {

  private gravacoes
  private title = 'Lista de Gravacoes'
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/gravacoes')
      .subscribe(dados => this.gravacoes = dados)
  }

  ngOnInit() {
  }

}
