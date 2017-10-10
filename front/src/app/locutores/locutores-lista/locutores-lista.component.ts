import { Component, OnInit } from '@angular/core';
import { LocutorService } from '../../services/locutor/locutor.service'

@Component({
  selector: 'app-locutores-lista',
  templateUrl: './locutores-lista.component.html',
  styleUrls: ['./locutores-lista.component.css'],
  providers: [ LocutorService ]
})
export class LocutoresListaComponent implements OnInit 
{
  private locutores : any
  private title = 'Lista de Locutores'
  
  constructor(private service: LocutorService) 
  { 
    this.service.listarTodos().subscribe((dados : Response) => this.locutores = dados)
  }

  ngOnInit() { }
}
