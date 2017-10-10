import { Component, OnInit } from '@angular/core';
import { BibliotecaService, Biblioteca } from '../../services/biblioteca/biblioteca.service'

@Component({
  selector: 'app-bibliotecas-form',
  templateUrl: './bibliotecas-form.component.html',
  styleUrls: ['./bibliotecas-form.component.css'],
  providers: [BibliotecaService]
})

export class BibliotecasFormComponent implements OnInit 
{
  private title = 'Nova biblioteca'
  private model : Biblioteca
  
  constructor(
    private bs : BibliotecaService,
  ) { }

  ngOnInit() 
  {  
    this.model = new Biblioteca()
  }
}
