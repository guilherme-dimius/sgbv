import { Component, OnInit } from '@angular/core'

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-bibliotecas-lista',
  templateUrl: './bibliotecas-lista.component.html',
  styleUrls: ['./bibliotecas-lista.component.css']
})
export class BibliotecasListaComponent implements OnInit {

  private bibliotecas
  private title = 'Lista de Bibliotecas de voz'
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/bibliotecas')
      .subscribe(dados => this.bibliotecas = dados)
  }

  ngOnInit() {
  }

}
