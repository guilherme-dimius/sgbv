import { Component, OnInit } from '@angular/core';
import { LocutorService } from '../../services/locutor/locutor.service'
import * as moment from 'moment'

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
    this.atualizarLista()   
  }

  atualizarLista() 
  {
    this.service.listarTodos().subscribe((dados: Response) => this.locutores = dados)
  }

  excluir(id: string) 
  {
    if(confirm('Deseja realmente excluir este locutor?')) 
    {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista()
      )
    }
  }

  ngOnInit() { }
}