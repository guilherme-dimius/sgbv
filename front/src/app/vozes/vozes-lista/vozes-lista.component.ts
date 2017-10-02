import { Component, OnInit } from '@angular/core'

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-vozes-lista',
  templateUrl: './vozes-lista.component.html',
  styleUrls: ['./vozes-lista.component.css']
})
export class VozesListaComponent implements OnInit {

  private vozes
  private title = 'Lista de Vozes'
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/vozes')
      .subscribe(dados => this.vozes = dados)
  }

  ngOnInit() {
  }

}
