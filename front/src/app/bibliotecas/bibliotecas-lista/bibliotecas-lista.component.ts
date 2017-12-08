import { Component, OnInit } from '@angular/core'
import { BibliotecaService } from '../../services/biblioteca/biblioteca.service'
import * as moment from 'moment'

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
    this.atualizarLista()   
  }

  atualizarLista() 
  {
    this.service.listarTodos().subscribe((dados: Response) => this.bibliotecas = dados)
  }

  formatarData(data : string) 
  {
    if(data)
    {''
      return moment(data, 'YYYY-MM-DDThh:mm:ssZ').format('DD/MM/YYYY hh[h]mm');
    }
    else 
    {
      return '';
    }
  }

  excluir(id: string) 
  {
    if(confirm('Deseja realmente excluir esta biblioteca?')) 
    {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista()
      )
    }
  }


  ngOnInit() { }
}
