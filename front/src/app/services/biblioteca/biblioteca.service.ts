import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// Classe que representa o model no front-end
export class Biblioteca 
{
  public _id: string;
  public nome: string;
  public rotulos: [string];
  public observacoes: string;
  public data: Date;
}

@Injectable()
export class BibliotecaService 
{
	constructor(private http: HttpClient) { }

  	public listarTodos() 
  	{
    	return this.http.get('http://localhost:3000/bibliotecas');
  	}
}
