import { Component, OnInit } from '@angular/core'

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-locutores-lista',
  templateUrl: './locutores-lista.component.html',
  styleUrls: ['./locutores-lista.component.css']
})
export class LocutoresListaComponent implements OnInit {

  private locutores
  private title = 'Lista de Locutores'
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/locutores')
      .subscribe(dados => this.locutores = dados)
  }

  ngOnInit() {
  }

}
