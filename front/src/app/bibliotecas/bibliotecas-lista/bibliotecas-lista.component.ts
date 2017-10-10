import { Component, OnInit } from '@angular/core'
import { BibliotecaService } from '../../services/biblioteca/biblioteca.service'

@Component(
{
  selector: 'app-bibliotecas-lista',
  templateUrl: './bibliotecas-lista.component.html',
  styleUrls: ['./bibliotecas-lista.component.css'],
  providers: [ BibliotecaService ]
})
export class BibliotecasListaComponent implements OnInit 
{
  private bibliotecas : any
  private title = 'Lista de bibliotecas de voz'
  
  constructor(private service: BibliotecaService) 
  { 
    this.service.listarTodos().subscribe((dados : Response) => this.bibliotecas = dados)
  }

  ngOnInit() { }
}
